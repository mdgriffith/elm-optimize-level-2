import ts from 'typescript';
import { astNodes } from './utils/create';

export const recordUpdate = (): ts.TransformerFactory<ts.SourceFile> =>
(context) => (sourceFile) => {
    const registry = new RecordRegistry();

    const propSet = new Set<string>();
    const updateSet = new Map<string, number>();
    ts.visitNode(sourceFile, registerUpdateStatements(propSet, updateSet, context));

    const replacedUpdates = ts.visitNode(sourceFile, replaceUpdateStatements(updateSet, context));
    const replacedLiterals = ts.visitNode(replacedUpdates, replaceObjectLiterals(propSet, registry, context));

    const recordStatements = createRecordStatements(registry);
    const reusableUpdateStatements = createReusableUpdateStatements(updateSet);
    const statementsToPrepend = recordStatements.concat(reusableUpdateStatements);
    const insertedCtors = ts.visitNode(replacedLiterals, prependNodes(statementsToPrepend, context));

    return insertedCtors;
}


class RecordRegistry {
    counter: number;
    map: Map<string, string>;

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
            return possibleShape;
        }

        const recordId = this.counter + 1;
        this.counter = recordId;
        const recordClassName = `$$Record${recordId}`;

        this.map.set(shapeId, recordClassName);

        return recordClassName;
    }
}

function registerUpdateStatements(propSet: Set<string>, updateSet: Map<string, number>, ctx: ts.TransformationContext) {
    const visitorHelp = (node: ts.Node): ts.VisitResult<ts.Node> => {
        ts.visitEachChild(node, visitorHelp, ctx);

        const updateExpression = isUpdateExpression(node);
        if (!updateExpression) {
            return node;
        }

        const objectLiteral = updateExpression.arguments[1] as ts.ObjectLiteralExpression;
        const objectProperties = Array.from(objectLiteral.properties);
        objectProperties.sort(objectLiteralPropertySort);

        // Add updated properties to propSet

        objectProperties.
            map((it) => (it.name as ts.Identifier).text).
            forEach((it) => { propSet.add(it); });

        // Register how many times this particular update expression is being used

        const shape = objectProperties.map((it) => (it.name as ts.Identifier).text).join(',');

        let num = updateSet.get(shape) || 0;
        num += 1
        updateSet.set(shape, num);

        return node;
    }

    return visitorHelp;
}

function objectLiteralPropertySort(a: ts.ObjectLiteralElementLike, b: ts.ObjectLiteralElementLike): number {
  var nameA = (a.name as ts.Identifier).text;
  var nameB = (b.name as ts.Identifier).text;
  if (nameA < nameB) {
    return -1;
  }

  if (nameA > nameB) {
    return 1;
  }

  return 0;
}

function replaceUpdateStatements(updateSet: Map<string, number>, ctx: ts.TransformationContext) {
    const visitorHelp = (node: ts.Node): ts.VisitResult<ts.Node> => {
        const visitedNode = ts.visitEachChild(node, visitorHelp, ctx);
        const updateExpression = isUpdateExpression(visitedNode);
        if (!updateExpression) {
            return visitedNode;
        }

        const objName = (updateExpression.arguments[0] as ts.Identifier).text;

        const objectLiteral = updateExpression.arguments[1] as ts.ObjectLiteralExpression;
        const objectProperties = Array.from(objectLiteral.properties);
        objectProperties.sort(objectLiteralPropertySort);

        const updateShape = objectProperties.map((it) => (it.name as ts.Identifier).text).join(',');
        const updatePerformed = updateSet.get(updateShape) || 0;

        if (updatePerformed > 1) {
            return generateCodeForReusableUpdate(objName, updateShape, objectProperties);
        }

        return generateCodeForSingleUpdate(objName, objectProperties);
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

function generateCodeForReusableUpdate(objName: string, shape: string, objectProperties: Array<ts.ObjectLiteralElementLike>): ts.Node {
 
    const updateFnName = `$$update__${shape.replace(/,/g, '__')}`;

    const initialArgs: Array<ts.Expression> = [ ts.createIdentifier(objName)  ];
    const newValues = objectProperties.map((it) => (it as ts.PropertyAssignment).initializer);
    const args = initialArgs.concat(newValues);

    return ts.createCall(
        ts.createIdentifier(updateFnName),
        undefined,
        args
    );
}

function generateCodeForSingleUpdate(objName: string, objectProperties: Array<ts.ObjectLiteralElementLike>): ts.Node {
    const copyId = ts.createIdentifier('$r');

    const cloneObj = ts.createVariableStatement(
        undefined,
        ts.createVariableDeclarationList([
            ts.createVariableDeclaration(
                copyId,
                undefined,
                ts.createCall(
                    ts.createPropertyAccess(
                        ts.createIdentifier(objName),
                        ts.createIdentifier('$c')
                    ),
                    undefined,
                    []
                )
            )
        ])
    );

    const propSetters: ts.Statement[] = objectProperties.
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


function replaceObjectLiterals(propSet: Set<string>, registry: RecordRegistry, ctx: ts.TransformationContext) {
    const visitorHelp = (node: ts.Node): ts.VisitResult<ts.Node> => {
        if (isTupleConstructor(node)) {
            return node;
        }

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

function isTupleConstructor(node: ts.Node): boolean {
    return ts.isFunctionDeclaration(node) && 
        (node.name?.text === '_Utils_Tuple2' || node.name?.text === '_Utils_Tuple3');
}

function isRecordLiteral(node: ts.Node): ts.ObjectLiteralExpression | null {
    if (ts.isObjectLiteralExpression(node) && node.properties[0] && (node.properties[0]?.name as ts.Identifier)?.text !== '$') {
        return node as ts.ObjectLiteralExpression;
    }

    return null;
}


function createRecordStatements(registry: RecordRegistry): ts.Node[] {
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

        ${className}.prototype.$c = function() {
            return new ${className}(${propGetters});
        }
    `;
}


function createReusableUpdateStatements(updateSet: Map<string, number>): ts.Node[] {
    const statementString = Array.from(updateSet.entries()).
        filter((it) => it[1] > 1).
        map((it) => createReusableUpdateStatement(it[0])).
        join('\n');

    return astNodes(statementString);
}

function createReusableUpdateStatement(shape: string): string {

    const updateFnName = `$$update__${shape.replace(/,/g, '__')}`;

    const props = shape.split(',');
    const propSetters = props.
        map((name) => `$r.${name} = ${name};`).
        join(' ');

    const propList = [ 'obj' ].concat(props).join(',');

    return `
        function ${updateFnName}(${propList}) {
            var $r = obj.$c();
            ${propSetters}
            return $r;
        }
    `;
}


function prependNodes(nodes: ts.Node[], ctx: ts.TransformationContext) {
    const visitorHelp = (node: ts.Node): ts.VisitResult<ts.Node> => {
        if (isFirstFWrapper(node)) {
            return nodes.concat(node);
        }

        return ts.visitEachChild(node, visitorHelp, ctx);
    }

    return visitorHelp;
}

function isFirstFWrapper(node: ts.Node): boolean {
    return ts.isFunctionDeclaration(node) && node?.name?.text === 'F';
}

