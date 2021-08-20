import ts from 'typescript';
import { astNodes } from './utils/create';

export const recordUpdate = (): ts.TransformerFactory<ts.SourceFile> =>
(context) => (sourceFile) => {
    const registry = new RecordRegistry();

    const propSet = new Set<String>();
    const replacedUpdates = ts.visitNode(sourceFile, replaceUpdateStatements(propSet, context));
    const replacedLiterals = ts.visitNode(replacedUpdates, replaceObjectLiterals(propSet, registry, context));

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

    register(recordAst: ts.ObjectLiteralExpression): string {
        const shapeId = recordAst.properties.
            map((it) => (it.name as ts.Identifier).text).
            join(",");

        const possibleShape = this.map.get(shapeId);
        if (possibleShape) {
            return possibleShape.valueOf();
        }

        const recordId = this.counter + 1;
        this.counter = recordId;
        const recordClassName = `Record${recordId}`;

        this.map.set(shapeId, recordClassName);

        return recordClassName;
    }
}


function replaceUpdateStatements(propSet: Set<String>, ctx: ts.TransformationContext) {
    const visitorHelp = (node: ts.Node): ts.VisitResult<ts.Node> => {
        const visitedNode = ts.visitEachChild(node, visitorHelp, ctx);
        const updateExpression = isUpdateExpression(visitedNode);
        if (!updateExpression) {
            return visitedNode;
        }

        const objName = (updateExpression.arguments[0] as ts.Identifier).text;
        const copyId = ts.createIdentifier('_r');

        const cloneObj = ts.createVariableStatement(
            undefined,
            ts.createVariableDeclarationList([
                ts.createVariableDeclaration(
                    copyId,
                    undefined,
                    ts.createCall(
                        ts.createPropertyAccess(
                            ts.createIdentifier(objName),
                            ts.createIdentifier('$clone')
                        ),
                        undefined,
                        []
                    )
                )
            ])
        );

        // Add updated properties to propSet
        const objectLiteral = updateExpression.arguments[1] as ts.ObjectLiteralExpression;

        objectLiteral.properties.
            map((it) => (it.name as ts.Identifier).text).
            forEach((it) => { propSet.add(it); });

        const propSetters: ts.Statement[] = objectLiteral.properties.
            map((it) => ts.createExpressionStatement(
                ts.createBinary(
                    ts.createPropertyAccess(
                        copyId,
                        it.name as ts.Identifier
                    ),
                    ts.createToken(ts.SyntaxKind.EqualsToken),
                    (it as ts.PropertyAssignment).initializer
                )
        ));

        const retStmt = ts.createReturn(copyId);

        propSetters.push(retStmt);

        const block = [ cloneObj as ts.Statement ].concat(propSetters);

        return ts.createImmediatelyInvokedFunctionExpression(block);
    }

    return visitorHelp;
}

function isUpdateExpression(node: ts.Node): ts.CallExpression | null {
    if (ts.isCallExpression(node) &&
        ts.isIdentifier(node.expression) &&
            node.expression.text === '_Utils_update') {
        return node as ts.CallExpression;
    }

    return null
}


function replaceObjectLiterals(propSet: Set<String>, registry: RecordRegistry, ctx: ts.TransformationContext) {
    const visitorHelp = (node: ts.Node): ts.VisitResult<ts.Node> => {
        const visitedNode = ts.visitEachChild(node, visitorHelp, ctx);
        const objectLiteral = isRecordLiteral(visitedNode);
        if (!objectLiteral) {
            return visitedNode;
        }

        // Abort of none of the record properties are used in an update expression
        const recordPropNames = objectLiteral.properties.map((it) => (it.name as ts.Identifier).text);
        if (!recordPropNames.some((it) => propSet.has(it))) {
            return visitedNode;
        }

        const recordClassName = registry.register(objectLiteral);
        const recordConstruction = ts.createParen(
            ts.createNew(
                ts.createIdentifier(recordClassName),
                undefined,
                objectLiteral.properties.map((it) => (it as ts.PropertyAssignment).initializer)
            )
        );

        return recordConstruction;
    }

    return visitorHelp;
}

function isRecordLiteral(node: ts.Node): ts.ObjectLiteralExpression | null {
    if (ts.isObjectLiteralExpression(node) && node.properties[0] && (node.properties[0]?.name as ts.Identifier)?.text !== '$') {
        return node as ts.ObjectLiteralExpression;
    }

    return null;
}


function createRecordStatements(registry: RecordRegistry): ts.NodeArray<ts.Statement> {
    const statementString = Array.from(registry.map.entries()).
        map((it) => createRecordStatement(
            it[1].valueOf(),
            it[0].split(',')
    )).join('\n');

    return astNodes(statementString);
}

function createRecordStatement(className: string, props: string[]): string {
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

        ${className}.prototype.$clone = function() {
            return new ${className}(${propGetters});
        }
    `;
}
