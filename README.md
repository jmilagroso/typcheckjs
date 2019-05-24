# typcheckjs

Data type checks in Javascript.

[![Build Status](https://travis-ci.org/jmilagroso/typcheckjs.svg?branch=master)](https://travis-ci.org/jmilagroso/typcheckjs)

## Introduction

To check what data type something has in javascript is not always the easiest. The language itself provides an operator called typeof for that which works in a straightforward way. Typeof returns a string of what a values data type is, so for an object "object" is returned and for a string "string".

# Installation

```cli 
 npm install --save typcheckjs
 ```

## Example

```javascript
const Typcheckjs = require('typcheckjs');

// isString()
const isStringTrue = Typcheckjs.isString('hello');
// isStringTrue === true -> true

// isString()
const isStringFalse = Typcheckjs.isString(123);
// isStringFalse === true -> false

```

## Usage

```javascript
const Typcheckjs = require('typcheckjs');

// Returns true if a value is a string.
// A string is always a string so this one is easy.
// Except if called with new (new String) typeof will instead return "object".
// So to also include those strings instanceof can be used.
Typcheckjs.isString(value);

// Returns true if a value is really a number.
// From typeof more things than just an ordinary number will return "number" like NaN and Infinity. 
// To know if a value really is a number the function isFinite is also required.
Typcheckjs.isNumber(value);

// Returns true if a value is an array.
// In javascript arrays are not true arrays like in java and in other languages.
// They're actually objects so typeof will return "object" for them.
// To know if something's really an array its constructor can be compared to Array.
Typcheckjs.isArray(value);

// Returns true if a value is a function.
// Functions are functions so here just typeof is enough.
Typcheckjs.isFunction(value);

// Returns true if a value is an object.
// Many things are objects in javascript.
// To know if a value is an object that can have properties and be looped through,
// its constructor can be compared to Object. It doesn't work for objects created from classes,
// then the instanceof operator can be used instead.
Typcheckjs.isObject(value);

// Returns true if a value is null.
// Most times you don't need to check explicitly for null and
// undefined since they're both falsy values.
// However to do it below functions does the trick.
Typcheckjs.isNull(value);

// Returns true if a value is undefined.
// Most times you don't need to check explicitly for null and undefined since they're both falsy values.
Typcheckjs.isUndefined(value);

// Returns true if a value is a boolean.
// For booleans typeof is enough since it returns "boolean" for both true and false.
Typcheckjs.isBoolean(value);

// Returns true if a value is a regexp.
// RegExp's are objects so the only thing needed to check is if the constructor is RegExp.
Typcheckjs.isRegExp(value);

// Returns true if value is an error object.
// Errors in javascript are the same as "exceptions" in many other programming languages.
// They come in a couple different forms like for instance Error, TypeError and RangeError.
// An instanceof statement is enough for them all,
// but just to be extra sure we also check for the "message" property that errors have.
Typcheckjs.isError(value);

// Returns true if value is a date object.
// Date isn't really a data type in javascript.
// But to know if something's a Date object it can be checked with instanceof.
Typcheckjs.isDate(value);

// Returns true if a Symbol.
// In ES6 the new datatype Symbol was added.
// Nicely enough typeof returns "symbol" for it so no more logic is required.
Typcheckjs.isSymbol(value);

```

## Tests
```
jay@ThinkPad  /usr/share/nginx/html/typcheck   master  npm test

> typcheckjs@1.0.0 test /usr/share/nginx/html/typcheck
> jest --coverage

 PASS  __tests__/index.test.js
  ✓ isString() should return true (4ms)
  ✓ isString() should return false
  ✓ isNumber() should return true (1ms)
  ✓ isNumber() should return false
  ✓ isArray() should return true
  ✓ isArray() should return false
  ✓ isFunction() should return true (1ms)
  ✓ isFunction() should return false
  ✓ isObject() should return true
  ✓ isObject() should return false
  ✓ isNull() should return true (1ms)
  ✓ isNull() should return false
  ✓ isUndefined() should return true
  ✓ isUndefined() should return false
  ✓ isBoolean() should return true (1ms)
  ✓ isBoolean() should return true
  ✓ isRegExp() should return true
  ✓ isRegExp() should return false
  ✓ isError() should return true (1ms)
  ✓ isError() should return false
  ✓ isDate() should return true
  ✓ isDate() should return false
  ✓ isSymbol() should return true (1ms)
  ✓ isSymbol() should return false

----------|----------|----------|----------|----------|-------------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------|----------|----------|----------|----------|-------------------|
All files |      100 |      100 |      100 |      100 |                   |
 index.js |      100 |      100 |      100 |      100 |                   |
----------|----------|----------|----------|----------|-------------------|
Test Suites: 1 passed, 1 total
Tests:       24 passed, 24 total
Snapshots:   0 total
Time:        1.276s
Ran all test suites.
```

## Reference
https://webbjocke.com/javascript-check-data-types/