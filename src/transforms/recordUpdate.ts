import ts from 'typescript';

export const recordUpdate = (): ts.TransformerFactory<ts.SourceFile> =>
(context) => (sourceFile) => {
    const registry = new RecordRegistry();
    ts.visitNode(sourceFile, replaceObjectLiterals(registry, context));
    return sourceFile;
}


class RecordRegistry {
    counter: number;
    map: Map<String, String>;

    constructor() {
        this.counter = 0;
        this.map = new Map();
    }

    register(recordAst: ts.Node): String {
        console.log(recordAst);
    }
}

function replaceObjectLiterals(_registry: RecordRegistry, ctx: ts.TransformationContext) {
    const visitorHelp = (node: ts.Node): ts.VisitResult<ts.Node> => {
        const visitedNode = ts.visitEachChild(node, visitorHelp, ctx);
        if (!isRecordLiteral(visitedNode)) {
            return visitedNode;
        }

        const recordClassName = registry.register(visitedNode);
        console.log(recordClassName);

        return visitedNode;
    }

    return visitorHelp;
}

function isRecordLiteral(node: ts.Node): boolean {
    return ts.isObjectLiteralExpression(node) &&
        node.properties.length > 0 &&
        node.properties[0].name.text !== '$';
}
