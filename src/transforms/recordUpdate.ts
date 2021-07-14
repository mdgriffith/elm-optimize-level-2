import ts from 'typescript';

export const recordUpdate = (): ts.TransformerFactory<ts.SourceFile> =>
(context) => (sourceFile) => {
    console.log('record update');
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

    register(recordAst: ts.Node) {
        console.log(recordAst);
    }
}

function replaceObjectLiterals(_registry: RecordRegistry, _ctx: ts.TransformationContext) {
    const visitorHelp = (node: ts.Node): ts.VisitResult<ts.Node> => {
        if (isRecordLiteral(node)) {
            return node;
        }

        return node;
    }

    return visitorHelp;
}

function isRecordLiteral(node: ts.Node): boolean {
    return ts.isObjectLiteralExpression(node);
}
