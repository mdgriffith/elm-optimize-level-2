import ts from 'typescript';

export const ast = (sourceText: string): ts.Node => {
    const source = ts.createSourceFile('bla', sourceText, ts.ScriptTarget.ES2018);
    return source.statements[0];
};

export const astNodes = (sourceText: string): ts.Node[] => {
    const source = ts.createSourceFile('bla', sourceText, ts.ScriptTarget.ES2018);
    return Array.from(source.statements);
}

export function create(name: string, body: ts.Node): ts.Node {
    if (
        ts.isExpressionStatement(body) &&
        ts.isBinaryExpression(body.expression)
    ) {
        return ts.createVariableDeclaration(name, undefined, body.expression.right);
    }
    return body;
}

