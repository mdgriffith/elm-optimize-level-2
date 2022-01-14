import ts from 'typescript';
import { ast } from '../src/transforms/utils/create';

import { determineType } from '../src/transforms/utils/determineType';

test("should return null when expression is an unknown function", () => {
  const expression = createExpression(`foo(x)`);

  expect(determineType(expression, null)).toBe(null);
});

test("should return numbers when expression is a number literal", () => {
  const expression = createExpression(`1`);

  expect(determineType(expression, null)).toBe("numbers");
});

test("should return lists when expression is []", () => {
  const expression = createExpression(`_List_Nil`);

  expect(determineType(expression, null)).toBe("lists");
});

test("should return strings-or-lists when expression is a _Utils_ap call", () => {
  const expression = createExpression(`_Utils_ap(a, b)`);

  expect(determineType(expression, null)).toBe("strings-or-lists");
});

test("should return numbers-or-strings when expression is a binary expression of +", () => {
  const expression = createExpression(`a + b`);

  expect(determineType(expression, null)).toBe("numbers-or-strings");
});

test("should return numbers when expression is a binary expression of + with a number on the left", () => {
  const expression = createExpression(`1 + b`);

  expect(determineType(expression, null)).toBe("numbers");
});

test("should return numbers when expression is a binary expression of + with a number on the right", () => {
  const expression = createExpression(`a + 1`);

  expect(determineType(expression, null)).toBe("numbers");
});

test("should return numbers when expression is a binary expression of + with a number nested on the right", () => {
  const expression = createExpression(`a + (b + 1)`);

  expect(determineType(expression, null)).toBe("numbers");
});

test("should return strings when expression is a binary expression of + with a string on the left", () => {
  const expression = createExpression(`"ok" + b`);

  expect(determineType(expression, null)).toBe("strings");
});

test("should return strings when expression is a binary expression of + with a string on the right", () => {
  const expression = createExpression(`a + "ok"`);

  expect(determineType(expression, null)).toBe("strings");
});

test("should return strings when expression is a binary expression of + with a string nested on the right", () => {
  const expression = createExpression(`a + (b + "ok")`);

  expect(determineType(expression, null)).toBe("strings");
});

test("should return strings when expression is a binary expression of + and an operand is a _Utils_ap call", () => {
  const expression = createExpression(`a + _Utils_ap(b, c)`);

  expect(determineType(expression, null)).toBe("strings");
});

test("should return strings when expression is a _Utils_ap call and an operand is a binary expression of +", () => {
  const expression = createExpression(`_Utils_ap(a, b + c)`);

  expect(determineType(expression, null)).toBe("strings");
});

test("should return numbers when expression is a binary expression of *", () => {
  const expression = createExpression(`a * b`);

  expect(determineType(expression, null)).toBe("numbers");
});

test("should return numbers when expression is a binary expression of -", () => {
  const expression = createExpression(`a - b`);

  expect(determineType(expression, null)).toBe("numbers");
});

test("should return numbers when expression is a binary expression of /", () => {
  const expression = createExpression(`a / b`);

  expect(determineType(expression, null)).toBe("numbers");
});

test("should return numbers when expression is a binary expression of **", () => {
  const expression = createExpression(`a ** b`);

  expect(determineType(expression, null)).toBe("numbers");
});

test("should return numbers when expression is a binary expression of %", () => {
  const expression = createExpression(`a % b`);

  expect(determineType(expression, null)).toBe("numbers");
});

test("should return numbers when expression is a unary expression of -", () => {
  const expression = createExpression(`-a`);

  expect(determineType(expression, null)).toBe("numbers");
});


function createExpression(source : string) : ts.Expression {
  return (ast(source) as ts.ExpressionStatement).expression;
}