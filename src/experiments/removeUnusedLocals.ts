import ts from 'typescript';
import { createProgramFromSource } from './createTSprogram';
export const createRemoveUnusedLocalsTransform = (): ts.TransformerFactory<ts.SourceFile> => context => {
  return sourceFile => {
    let unused = collectUnusedVariables(sourceFile);

    console.log('found unused:', unused.length);

    let removedCount = 0;

    const visitor = (node: ts.Node): ts.VisitResult<ts.Node> => {
      // detects function f(..){..}
      if (
        ts.isFunctionDeclaration(node) &&
        node.name &&
        isUnused(unused, node.name.pos, node.name.end)
      ) {
        removedCount++;
        return undefined;
      }

      if (ts.isVariableStatement(node)) {
        const declList = node.declarationList;
        const filteredDeclarations = declList.declarations.filter(
          decl => !isUnused(unused, decl.name.pos, decl.name.end)
        );

        if (filteredDeclarations.length !== declList.declarations.length) {
          if (filteredDeclarations.length === 0) {
            // means that there is nothing left, thus delete the entire thing
            removedCount += declList.declarations.length;
            return undefined;
          }

          // only update remove some of the declarations
          removedCount +=
            declList.declarations.length - filteredDeclarations.length;
          return ts.updateVariableStatement(
            node,
            undefined,
            ts.updateVariableDeclarationList(declList, filteredDeclarations)
          );
        }
      }

      return ts.visitEachChild(node, visitor, context);
    };

    // TODO make this code pretty
    let result = ts.visitNode(sourceFile, visitor);
    unused = collectUnusedVariables(result);

    while (unused.length > 0) {
      console.log('found unused nextRound:', unused.length);
      result = ts.visitNode(result, visitor);
      unused = collectUnusedVariables(result);
    }
    console.log('totalRemoveCount:', removedCount);
    return result;
  };
};

function collectUnusedVariables(
  sourceFile: ts.SourceFile
): readonly ts.Diagnostic[] {
  const [program] = createProgramFromSource(sourceFile);
  const res = ts.getPreEmitDiagnostics(program);
  return res.filter(d => d.reportsUnnecessary);
}

function isUnused(
  unused: readonly ts.Diagnostic[],
  start: number,
  end: number
) {
  return unused.some(d => {
    const dstart = d.start ?? -1;
    const dend = dstart + (d.length ?? -2);
    return (dstart < end && dend > start) || (start < dend && end > dstart);
  });
}
