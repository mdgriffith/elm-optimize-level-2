import ts from 'typescript';

import { transformCode } from './helpers/transformCode';
import {supportArraysForHtml} from "../src/transforms/supportArraysForHtml";

test('it removes the _List_fromArray call for functions that create DOM nodes', () => {
  const initialCode = `
    var $elm$html$Html$div = _VirtualDom_node('div');
    var $elm$html$Html$button = _VirtualDom_node('button');
    var $elm$html$Html$p = _VirtualDom_node('p');
    var view = A2(
      $elm$html$Html$div,
      _List_fromArray([
        $elm$html$Html$Attributes$class('some'),
        $elm$html$Html$Attributes$class('classes'),
        $elm$html$Html$Attributes$id('id')
      ]),
      _List_fromArray([
        $elm$html$Html$text('Some'),
        A2(
          $elm$html$Html$button,
          _List_fromArray([$elm$html$Html$Attributes$class('button')]),
          _List_fromArray([$elm$html$Html$text('Button')])
        ),
        $elm$html$Html$text('to make some'),
        A2(
          $elm$html$Html$p,
          _List_Nil,
          _List_fromArray([$elm$html$Html$text('context')])
        )
      ])
    );
  `;

  const expectedOutputCode = `
    var $elm$html$Html$div = _VirtualDom_node('div');
    var $elm$html$Html$button = _VirtualDom_node('button');
    var $elm$html$Html$p = _VirtualDom_node('p');
    var view = A2(
      $elm$html$Html$div,
      [
        $elm$html$Html$Attributes$class('some'),
        $elm$html$Html$Attributes$class('classes'),
        $elm$html$Html$Attributes$id('id')
      ],
      [
        $elm$html$Html$text('Some'),
        A2(
          $elm$html$Html$button,
          [$elm$html$Html$Attributes$class('button')],
          [$elm$html$Html$text('Button')]
        ),
        $elm$html$Html$text('to make some'),
        A2(
          $elm$html$Html$p,
          [],
          [$elm$html$Html$text('context')]
        )
      ]
    );
  `;

  const { actual, expected } = transformCode(initialCode, expectedOutputCode, supportArraysForHtml);
  expect(actual).toBe(expected);
});


test('it removes the _List_fromArray call for partially applied functions', () => {
  const initialCode = `
    var $elm$html$Html$div = _VirtualDom_node('div');
    var partialView1 = A2(
      $elm$html$Html$node,
      'web-component',
      _List_fromArray([
        $elm$html$Html$Attributes$class('some'),
        $elm$html$Html$Attributes$class('classes'),
        $elm$html$Html$Attributes$id('id')
      ])
    );

    var partialView2 = $elm$html$Html$div(
      _List_fromArray([
        $elm$html$Html$Attributes$class('some'),
        $elm$html$Html$Attributes$class('classes'),
        $elm$html$Html$Attributes$id('id')
      ])
    );
  `;

  const expectedOutputCode = `
    var $elm$html$Html$div = _VirtualDom_node('div');
    var partialView1 = A2(
      $elm$html$Html$node,
      'web-component',
      [
        $elm$html$Html$Attributes$class('some'),
        $elm$html$Html$Attributes$class('classes'),
        $elm$html$Html$Attributes$id('id')
      ]
    );

    var partialView2 = $elm$html$Html$div(
      [
        $elm$html$Html$Attributes$class('some'),
        $elm$html$Html$Attributes$class('classes'),
        $elm$html$Html$Attributes$id('id')
      ]
    );
  `;

  const { actual, expected } = transformCode(initialCode, expectedOutputCode, supportArraysForHtml);
  expect(actual).toBe(expected);
});

test('should not remove _List_fromArray from non-supported functions', () => {
  const initialCode = `
    var a = A2(
      $author$project$Module$someFunction,
      _List_fromArray([1, 2, 3]),
      value
    );

    var b = $author$project$Module$someOtherFunction(
      _List_fromArray([1, 2, 3])
    );
    
    var c = _List_fromArray([1, 2, 3]);
  `;

  const { actual, expected } = transformCode(initialCode, initialCode, supportArraysForHtml);
  expect(actual).toBe(expected);
});
