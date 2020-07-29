import ts from 'typescript';

import { functionInlineTransformer } from '../src/experiments/inlineWrappedFunctions';

const initialCode = `
var _VirtualDom_map = F2(function (tagger, node) {
    return {
        $: 4,
        j: tagger,
        k: node,
        b: 1 + (node.b || 0),
    };
});

var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;

A2($elm$virtual_dom$VirtualDom$map, fn, A2(styled.d9, add, context));
`;

const expectedOutputCode = `
  var _VirtualDom_map_raw = function (tagger, node) {
        return {
            $: 4,
            j: tagger,
            k: node,
            b: 1 + (node.b || 0),
        };
    }, _VirtualDom_map = F2(_VirtualDom_map_raw);

    var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
    _VirtualDom_map_raw(fn, A2(styled.d9, add, context));
`;

test('it can process nested calls of A2 with non identifiers as the first arg ', () => {
  const source = ts.createSourceFile(
    'elm.js',
    initialCode,
    ts.ScriptTarget.ES2018
  );

  const printer = ts.createPrinter();

  const [output] = ts.transform(source, [
    functionInlineTransformer,
  ]).transformed;

  const expectedOutput = printer.printFile(
    ts.createSourceFile('elm.js', expectedOutputCode, ts.ScriptTarget.ES2018)
  );

  const printedOutput = printer.printFile(output);

  expect(printedOutput).toBe(expectedOutput);
});
