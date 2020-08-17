declare module 'node-elm-compiler' {
  export function compileToStringSync(files: string[], options: object): string;
}

declare module 'tree-sitter-elm';

declare module 'prepack' {
  // https://prepack.io/getting-started.html
  export type PrepackOptions = {
    /** If true, try to retain original variable and function names as part of the generated code.*/
    debugNames?: boolean;

    /** Enables two passes in the serializer to improve code quality by avoiding intermediate variables.*/
    inlineExpressions?: boolean;

    /** Logs evaluated function calls. */
    trace?: boolean;

    /** https://github.com/facebook/prepack/wiki/PP0045
     *
     * Prepack imposes a maximum call stack depth. It can be configured via the maxStackDepth option, and it defaults to 112.
     *  This compiler diagnostics is triggered when an excess number of execution contexts have been pushed on the call stack.
     */
    maxStackDepth?: number;
  };

  export function prepackFileSync(
    fileNames: string[],
    options: PrepackOptions
  ): { code: string };
}
