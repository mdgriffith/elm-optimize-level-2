import * as ts from "typescript";
import {parseAXFunction, parseFXFunction} from "./ElmWrappers";

const functionsToIgnore: string[] = []; // optionally ['require', 'parseInt', 'exec', 'reject', 'resolve'];

export type CallGraph = {
  all: string[],
  called: Map<string, string[]>
}

export function print(fns: CallGraph){
    // Output
    console.log('');
    console.log('======================================');
    console.log(fns.all);
    console.log('--------------------------------------');
    console.log(fns.called);
    console.log('--------------------------------------');
    console.log('Functions: \t\t\t', fns.all.length);
    console.log('Functions that call others: \t', fns.called.size);
    console.log('--------------------------------------');
}


// =================================================================================================

/**
 * Recursively walk through TypeScript code extracting
 *  - function declarations and
 *  - function calls within each function
 *
 * Code modified from https://convincedcoder.com/2019/01/19/Processing-TypeScript-using-TypeScript/
 * @param node
 * @param sourceFile
 * @param indentLevel -- helpful for logging
 */
function extractFunctionCalls(node: ts.Node, sourceFile: ts.SourceFile, indentLevel: number, contextFn: string | null):CallGraph {

  let graph: CallGraph = { all: [], called: new Map()}

  // Standard named functions, e.g `function hello()`
  if (ts.isFunctionDeclaration(node)) {
    // logNode(node, sourceFile, indentLevel);
    node.forEachChild(child => {
      if (ts.isIdentifier(child)) {
        const declaredFunction: string = child.getText(sourceFile);
        contextFn = declaredFunction  
        graph.all.push(declaredFunction);
      }
    });
  }

  // Arrow function
  if (
    ts.isVariableDeclaration(node) &&
    node.initializer &&
    ts.isArrowFunction(node.initializer) &&
    indentLevel === 3
  ) {
    const child = node.getChildAt(0, sourceFile);
    if (ts.isIdentifier(child)) {
      const declaredFunction: string = child.getText(sourceFile);
      contextFn = declaredFunction
      graph.all.push(declaredFunction);
    }
  }

  // Elm style function declarations with wrapper
  // i.e. var my_function = F3(function(x,y,z){ return a })
  let already_inspected: boolean = false;
  if ( ts.isVariableDeclaration(node) && node.initializer){
    
    if (ts.isCallExpression(node.initializer) && ts.isIdentifier(node.initializer.expression) && ts.isIdentifier(node.name)) {
       
        const fn_var_name = node.name.text;

        contextFn = node.name.text;

        // match F{n} wrapper
        if (parseFXFunction(node.initializer.expression.text)) {
            graph.all.push(fn_var_name);
            node.initializer.forEachChild((child) => {
                if (ts.isFunctionExpression(child)) {
                    graph.all.push(fn_var_name);
                    contextFn = fn_var_name
                    let subgraph = extractFunctionCalls(child, sourceFile, indentLevel + 1, contextFn);

//                     graph.all = graph.all.concat(subgraph.all)
                    graph.all.push(contextFn)
                    graph.called = merge_maps(graph.called, subgraph.called)
                    already_inspected = true
                } 
            })
        }

    } else if (ts.isIdentifier(node.name)) {
      const contextFn = node.name.text;
      if (ts.isIdentifier(node.initializer)) {
        graph.all.push(contextFn)
        var new_called = new Map()
        new_called.set(contextFn, [node.initializer.text])
        graph.called = merge_maps(graph.called, new_called)

      } else {
        let subgraph = extractFunctionCalls(node.initializer, sourceFile, indentLevel + 1, contextFn);
//         graph.all = graph.all.concat(subgraph.all)
        graph.all.push(contextFn)
        graph.called = merge_maps(graph.called, subgraph.called)
        
      }
      already_inspected = true
    }
  }


  if (ts.isIdentifier(node) && (node.text.includes("$") ) ) {
    var new_called = new Map()
    new_called.set(contextFn, [node.text])
    graph.called = merge_maps(graph.called, new_called)
  }

  // Looking for elm invocations
  // This is A{n}(my_function, otherstuff)    
  if (ts.isCallExpression(node) && !already_inspected) {
    
    if (ts.isIdentifier(node.expression)) {
      if (parseAXFunction(node.expression.text)) {
        let found_index = 0
        node.forEachChild((child) => {
          if (found_index == 1 && ts.isIdentifier(child) && contextFn ){
            functionCall(contextFn, child.text, graph)
          }
          found_index = found_index + 1
        })
      } else {
        if (contextFn) {
          functionCall(contextFn, node.expression.text, graph)
        }
      }
    }
  }

  // logNode(node, sourceFile, indentLevel);
  if (!already_inspected){
    if (ts.isCallExpression(node)) {
        for (const arg of node.arguments) {
            let subgraph = extractFunctionCalls(arg, sourceFile, indentLevel + 1, contextFn);
            graph.all = graph.all.concat(subgraph.all)
            graph.called = merge_maps(graph.called, subgraph.called)
        }
    }

    node.forEachChild(child => {
      let subgraph = extractFunctionCalls(child, sourceFile, indentLevel + 1, contextFn);
      graph.all = graph.all.concat(subgraph.all)
      graph.called = merge_maps(graph.called, subgraph.called)
    });
  }

  return graph
}

function merge_maps(one:Map<string, string[]> , two: Map<string, string[]>){

  for (let [key, value] of two.entries()) {
    let value_one = one.get(key)
    if (value_one == undefined) {
      one.set(key, value);
    } else {
      one.set(key, value_one.concat(value))
    }
  }

  return one


}

/**
 * Log stuff if needed
 * @param node
 * @param sourceFile
 * @param indentLevel
 */
function logNode(node: ts.Node, sourceFile: ts.SourceFile, indentLevel: number) {
  const indentation = "-".repeat(indentLevel);
  const syntaxKind = ts.SyntaxKind[node.kind];
  const nodeText = node.getText(sourceFile);
  console.log(`${indentation}${syntaxKind}: ${nodeText}`);
}

function formatNode(node: ts.Node, sourceFile: ts.SourceFile, indentLevel: number): string {
  const indentation = "-".repeat(indentLevel);
  const syntaxKind = ts.SyntaxKind[node.kind];
  const nodeText = node.getText(sourceFile);
  return `${indentation}${syntaxKind}: ${nodeText}`;
}


function functionCall(contextFn: string, calledFunction: string, graph: CallGraph): CallGraph {
    if (!functionsToIgnore.includes(calledFunction)) {
      const pastCalls = graph.called.get(contextFn);
      if (pastCalls) {
        pastCalls.push(calledFunction);
        graph.called.set(contextFn, pastCalls);
      } else {
        graph.called.set(contextFn, [calledFunction]);
      }
    }
    return graph
  }

export function getCalled(graph: CallGraph, entry: string, already_called: undefined | string[]) : string[] {
  
  let called: string[] = []
  if (already_called){
    called = called.concat(already_called)
  }
  if (graph.called.has(entry)){
    var found = graph.called.get(entry)
    
    if (!found) {
      return called
    }
    for (const item of found) {
      if (called.includes(item)){
        continue
      }
      called.push(item)
      called = getCalled(graph, item, called)
    }
  }

  return called


}



export function createCallGraph(source: ts.SourceFile): CallGraph {

    // =================================================================================================
    // instead of: extractFunctionCalls(sourceFile, 0, sourceFile);
    // grab all the root nodes first
    // then do recursion for each
    
    const rootNodes: ts.Node[] = [];
    const callgraph : CallGraph = {all: [], called: new Map()}

    source.forEachChild((child: ts.Node) => {
        rootNodes.push(child)
    });

    rootNodes.forEach((node: ts.Node) => {
        const subgraph : CallGraph = extractFunctionCalls(node, source, 1, null);
        callgraph.all = callgraph.all.concat(subgraph.all)
        callgraph.called = merge_maps(callgraph.called, subgraph.called)
    });

    // Only include functions that exist in the `allFunctions` list
    // This will remove functions defined and called within the body of another function
    // Which we can't ask function status for unless we get more clever.
    // And of course that ain't happenin soon.
    callgraph.called.forEach((value, key) => {
      callgraph.called.set(key, value.filter((calledFunc: string) => {
        return callgraph.all.includes(calledFunc);
      }));

      var called = callgraph.called.get(key)
      if (!called || called.length == 0) {
        callgraph.called.delete(key);
      }
    });
   
    return callgraph;
  }
