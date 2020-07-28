import Parser from 'tree-sitter';
import Elm from 'tree-sitter-elm';
import { ElmVariant } from './types';
// import * as fs from 'fs';

// Parse the elm file using tree sitter
const elmParser = new Parser();
elmParser.setLanguage(Elm);

export const parseElm = ({
  author,
  project,
  source,
}: {
  author: string;
  project: string;
  source: string;
}): { [id: string]: ElmVariant[] } => {
  const tree = elmParser.parse(source);
  const found: { [id: string]: ElmVariant[] } = {};

  /*
      A quick reference for using treesitter.
      Generally it's pretty easy to see what methods are available here: 
      https://github.com/tree-sitter/node-tree-sitter/blob/master/index.js

      We usually want these things

        - node.namedChildren 
            Gives a list of named children for a node.  Unnamed children are things like intermediate characters in the AST.
            http://tree-sitter.github.io/tree-sitter/using-parsers#named-vs-anonymous-nodes
        
        - node.type 
            The name of the AST node that was parsed.  e.g. upper_case_identifier, or union_variant

        - node.toString()
            See the s-expression version of the node.  e.g. (union_variant (upper_case_identifier) (type_ref (upper_case_qid (upper_case_identifier))))
            May look kinda weird, but it's basically describing the AST for that node.
            http://tree-sitter.github.io/tree-sitter/using-parsers#query-syntax

        - node.text
            Render the literal text for that node.

  */
  let moduleName = 'Unknown';

  for (let child of tree.rootNode.namedChildren) {
    switch (child.type) {
      case 'module_declaration': {
        for (let module of child.namedChildren) {
          if (module.type == 'upper_case_qid') {
            moduleName = module.text;
            break;
          }
        }
        break;
      }
      case 'type_declaration': {
        let name = '';
        let index = 0;
        let totalTypeSlotCount = 0;

        for (let variant of child.namedChildren) {
          switch (variant.type) {
            case 'upper_case_identifier': {
              name = variant.text;
              break;
            }
            case 'union_variant': {
              let foundVariantName = '';
              let slots: string[] = [];

              for (let detail of variant.namedChildren) {
                switch (detail.type) {
                  case 'upper_case_identifier': {
                    foundVariantName = detail.text;
                    break;
                  }

                  default: {
                    slots.push(detail.text);
                    break;
                  }
                }
              }
              totalTypeSlotCount = Math.max(totalTypeSlotCount, slots.length);

              let jsName =
                '$' +
                author +
                '$' +
                project +
                '$' +
                moduleName.replace('.', '$') +
                '$' +
                foundVariantName;

              if (name in found) {
                found[name].push({
                  typeName: name,
                  name: foundVariantName,
                  jsName: jsName,
                  index: index,
                  slots: slots,
                  totalTypeSlotCount: totalTypeSlotCount,
                });
              } else {
                found[name] = [
                  {
                    typeName: name,
                    name: foundVariantName,
                    index: index,
                    jsName: jsName,
                    slots: slots,
                    totalTypeSlotCount: totalTypeSlotCount,
                  },
                ];
              }

              index = index + 1;
              break;
            }
            default: {
              break;
            }
          }
        }

        for (let variant of found[name]) {
          variant.totalTypeSlotCount = totalTypeSlotCount;
        }
        break;
      }
      default: {
        break;
      }
    }
  }
  return found;
};

const result = parseElm({
  author: 'author',
  project: 'project',
  source: './testcases/simple/Main.elm',
});

console.log(result);
