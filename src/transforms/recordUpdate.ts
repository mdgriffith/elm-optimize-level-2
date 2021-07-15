import ts from 'typescript';
import { astNodes } from './utils/create';

export const recordUpdate = (): ts.TransformerFactory<ts.SourceFile> =>
(context) => (sourceFile) => {
    const registry = new RecordRegistry();

    const replacedLiterals = ts.visitNode(sourceFile, replaceObjectLiterals(registry, context));

    const recordStatements = createRecordStatements(registry);
    replacedLiterals.statements = recordStatements.concat(replacedLiterals.statements);

    return replacedLiterals;
}


class RecordRegistry {
    counter: number;
    map: Map<String, String>;

    constructor() {
        this.counter = 0;
        this.map = new Map();
    }

    register(recordAst: ts.Node): String {
        const shapeId = recordAst.properties.
            map((it) => it.name.text).
            join(",");

        if (this.map.has(shapeId)) {
            return this.map.get(shapeId);
        }

        const recordId = this.counter + 1;
        this.counter = recordId;
        const recordClassName = `Record${recordId}`;

        this.map.set(shapeId, recordClassName);

        return recordClassName;
    }
}

function replaceObjectLiterals(registry: RecordRegistry, ctx: ts.TransformationContext) {
    const visitorHelp = (node: ts.Node): ts.VisitResult<ts.Node> => {
        if (isUpdateExpression(node)) {
            return node;
        }

        const visitedNode = ts.visitEachChild(node, visitorHelp, ctx);
        if (!isRecordLiteral(visitedNode)) {
            return visitedNode;
        }

        const recordClassName = registry.register(visitedNode);
        const recordConstruction = ts.createParen(
            ts.createNew(
                ts.createIdentifier(recordClassName),
                undefined,
                visitedNode.properties.map((it) => it.initializer)
            )
        );

        return recordConstruction;
    }

    return visitorHelp;
}

function isUpdateExpression(node: ts.Node): boolean {
    return ts.isCallExpression(node) &&
        ts.isIdentifier(node.expression) &&
        node.expression.text === '_Utils_update';
}

function isRecordLiteral(node: ts.Node): boolean {
    return ts.isObjectLiteralExpression(node) &&
        node.properties.length > 0 &&
        node.properties[0].name.text !== '$';
}


function createRecordStatements(registry: RecordRegistry): ts.Node[] {
    const statementString = Array.from(registry.map.entries()).
        map((it) => createRecordStatement(
            it[1],
            it[0].split(',')
    )).join('\n');

    return astNodes(statementString);
}

function createRecordStatement(className: String, props: String[]): String {
    const propList = props.join(',');
    const propSetters = props.
        map((name) => `this.${name} = ${name};`).
        join(' ');
    const propGetters = props.
        map((name) => `this.${name}`).
        join(', ');

    return `
        function ${className}(${propList}) {
            ${propSetters}
        }

        ${className}.prototype.$clone = function(cb) {
            var clone = new ${className}(${propGetters});
            cb(clone);
            return clone;
        }
    `;
}
