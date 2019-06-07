// Reference: https://webbjocke.com/javascript-check-data-types/
// https://webbjocke.com/author/wj/

// Returns true if a value is a string.
// A string is always a string so this one is easy.
// Except if called with new (new String) typeof will instead return "object".
// So to also include those strings instanceof can be used.
module.exports.isString = value => typeof value === 'string' || value instanceof String;

// Returns true if a value is really a number.
// From typeof more things than just an ordinary number will return "number" like NaN and Infinity.
// To know if a value really is a number the function isFinite is also required.
module.exports.isNumber = value => typeof value === 'number' && Number.isFinite(value);

// Returns true if a value is an array.
// In javascript arrays are not true arrays like in java and in other languages.
// They're actually objects so typeof will return "object" for them.
// To know if something's really an array its constructor can be compared to Array.
module.exports.isArray = value => value && typeof value === 'object' && value.constructor === Array;

// Returns true if a value is a function.
// Functions are functions so here just typeof is enough.
module.exports.isFunction = value => typeof value === 'function';

// Returns true if a value is an object.
// Many things are objects in javascript.
// To know if a value is an object that can have properties and be looped through,
// its constructor can be compared to Object. It doesn't work for objects created from classes,
// then the instanceof operator can be used instead.
module.exports.isObject = value => value && typeof value === 'object' && value.constructor === Object;

// Returns true if a value is null.
// Most times you don't need to check explicitly for null and
// undefined since they're both falsy values.
// However to do it below functions does the trick.
module.exports.isNull = value => value === null;

// Returns true if a value is undefined.
// Most times you don't need to check explicitly for null
// and undefined since they're both falsy values.
module.exports.isUndefined = value => typeof value === 'undefined';

// Returns true if a value is a boolean.
// For booleans typeof is enough since it returns "boolean" for both true and false.
module.exports.isBoolean = value => typeof value === 'boolean';

// Returns true if a value is a regexp.
// RegExp's are objects so the only thing needed to check is if the constructor is RegExp.
module.exports.isRegExp = value => value && typeof value === 'object' && value.constructor === RegExp;

// Returns true if value is an error object.
// Errors in javascript are the same as "exceptions" in many other programming languages.
// They come in a couple different forms like for instance Error, TypeError and RangeError.
// An instanceof statement is enough for them all,
// but just to be extra sure we also check for the "message" property that errors have.
module.exports.isError = value => value instanceof Error && typeof value.message !== 'undefined';

// Returns true if value is a date object.
// Date isn't really a data type in javascript.
// But to know if something's a Date object it can be checked with instanceof.
module.exports.isDate = value => value instanceof Date;

// Returns true if a Symbol.
// In ES6 the new datatype Symbol was added.
// Nicely enough typeof returns "symbol" for it so no more logic is required.
module.exports.isSymbol = value => typeof value === 'symbol';
