'use strict';

/*
    Homework Assignment #16: Spread and Rest

*/

/**
 * SPREAD OPERATOR:
 * 
 * Spread syntax allows an iterable such as an array 
 * expression or string to be expanded in places whe
 * re zero or more arguments (for function calls) or 
 * elements (for array literals) are expected, or an 
 * object expression to be expanded in places where 
 * zero or more key-value pairs (for object literals) 
 * are expected.
 */


/** use with an array */
const numbers = [1, 2, 3];
console.log('18: ', ...numbers);
// expected output: 1 2 3

console.log('21: ', numbers);
// expected output: [1, 2, 3]


/** use with a function */
function myFunction(x, y, z) {
  console.log('26: ', ...args);
}
var args = [0, 1, 2];
myFunction(...args);
// expected output: 0 1 2


/* copy an array */
var arr = [1, 2, 3];
var arr2 = [...arr]; // like arr.slice()
arr2.push(4); 
console.log('36: ', arr2);


/** shallow object cloning */
const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 13 };
const merge = ( ...objects ) =>  { 
  console.log('42', ...objects) };
var mergedObj = merge ( obj1, obj2);



/**
 * REST OPERATOR:
 * 
 */