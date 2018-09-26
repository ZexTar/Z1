const functions = require('./functions');
const [min, max, array, string, arrayOfStrings, type] = require('./config');

console.log(functions.random(min, max));
console.log(functions.minIntegerFromArray(array));
console.log(functions.minIntegerFromString(string));
console.log(functions.concatStringsByLength(arrayOfStrings, type));
