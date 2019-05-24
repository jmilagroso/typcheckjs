/* global test */
/* global expect */
/* eslint func-names: ["error", "never"] */

const typcheckjs = require('./../index');

test('isString() should return true', () => {
  expect(typcheckjs.isString('hello')).toBe(true);
});

test('isString() should return false', () => {
  expect(typcheckjs.isString(100)).toBe(false);
});

test('isNumber() should return true', () => {
  expect(typcheckjs.isNumber(12345)).toBe(true);
});

test('isNumber() should return false', () => {
  expect(typcheckjs.isNumber('hello there')).toBe(false);
});

test('isArray() should return true', () => {
  expect(typcheckjs.isArray([1, 2, 3])).toBe(true);
});

test('isArray() should return false', () => {
  expect(typcheckjs.isArray('hello there')).toBe(false);
});

test('isFunction() should return true', () => {
  const tmp = function (a, b) { return a * b; };
  expect(typcheckjs.isFunction(tmp)).toBe(true);
});

test('isFunction() should return false', () => {
  expect(typcheckjs.isFunction('hello there')).toBe(false);
});

test('isObject() should return true', () => {
  expect(typcheckjs.isObject({ k: 'value' })).toBe(true);
});

test('isObject() should return false', () => {
  expect(typcheckjs.isObject('hello there')).toBe(false);
});

test('isNull() should return true', () => {
  const tmp = null;
  expect(typcheckjs.isNull(tmp)).toBe(true);
});

test('isNull() should return false', () => {
  expect(typcheckjs.isNull('hello there')).toBe(false);
});

test('isUndefined() should return true', () => {
  expect(typcheckjs.isUndefined(undefined)).toBe(true);
});

test('isUndefined() should return false', () => {
  expect(typcheckjs.isUndefined('hello there')).toBe(false);
});

test('isBoolean() should return true', () => {
  expect(typcheckjs.isBoolean(true)).toBe(true);
});

test('isBoolean() should return true', () => {
  expect(typcheckjs.isBoolean('hello there')).toBe(false);
});

test('isRegExp() should return true', () => {
  const regex = new RegExp('\\w+');
  expect(typcheckjs.isRegExp(regex)).toBe(true);
});

test('isRegExp() should return false', () => {
  expect(typcheckjs.isRegExp('hello there')).toBe(false);
});

test('isError() should return true', () => {
  const err = new Error('I was constructed via the "new" keyword!');
  expect(typcheckjs.isError(err)).toBe(true);
});

test('isError() should return false', () => {
  expect(typcheckjs.isError('hello there')).toBe(false);
});

test('isDate() should return true', () => {
  const date = new Date();
  expect(typcheckjs.isDate(date)).toBe(true);
});

test('isDate() should return false', () => {
  expect(typcheckjs.isDate('hello there')).toBe(false);
});

test('isSymbo() should return true', () => {
  const symbol = Symbol(34);
  expect(typcheckjs.isSymbol(symbol)).toBe(true);
});

test('isSymbo() should return false', () => {
  expect(typcheckjs.isSymbol('hello there')).toBe(false);
});
