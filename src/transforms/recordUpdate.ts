import ts from 'typescript';

export const recordUpdate = (): ts.TransformerFactory<ts.SourceFile> =>
(context) => (sourceFile) => {
    console.log('record update');
    const registry = new RecordRegistry();
    ts.visitNode(sourceFile, removeApplicativeFuncVisitor(registry, context));
    return sourceFile;
}


function RecordRegistry() {
    this.counter = 0;
    this.map = new Map();
}

RecordRegistry.prototype.register = function(recordAst) {
    console.log(recordAst);
}


function unwrapVisitor(recordRegistry, context) {
    const visitorHelp = (node: ts.Node): ts.VisitResult<ts.Node> => {
        if (isRecordLiteral(visitedNode)) {
            return visitedNode.arguments[0];
        }

        return node;
    }

    return visitorHelp;
}

function isRecordLiteral(node: ts.Node): boolean {
    return ts.isObjectLiteral(node);
}
