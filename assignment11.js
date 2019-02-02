'use strict';

/*
    Homework Assignment #11: Exceptions

*/

let input = JSON.stringify(
  [ 'John', 'Peter', 'Sally', 'Jane' ]
);

/**
* @param input object
* gets parameter finds out if it's JSON or string or array and
* reverses its values
*/
function reverseJsonArray(input) {

if ((input !== null) && (input !== undefined)) {

// if argument is not null or undefined
if ((typeof input === 'string') && !(Array.isArray(input))) {

// stringify given argument
try {
input = JSON.parse(input);

// swapping values
console.log('parsed argument: ',input);
let [ a, b, c, d ] = input;
[ d, c, b, a ] = [ a, b, c, d ];
input = JSON.stringify([ a, b, c, d ]);
console.log('swapped values:', input);

} catch(err) {
  console.log('Error message:', err.message);
  return false;
}

// 
} else {
console.log(
'Bad argument: requires stringified JSON object.');
return false;
}
// ... else return null
} else { 
console.log('null or undefined input argument.');
return false;
}

}

// 1. Without any arguments
console.log(`1. Without any arguments:
${reverseJsonArray()}

`);

// 2. With a boolean as the argument
console.log(`2. With a boolean as the argument:
${reverseJsonArray(true)}

`);

// 3. With an Array (non-stringified) as the argument
input = [ 'John', 'Peter', 'Sally', 'Jane' ];

console.log(`3. With an Array (non-stringified) as the argument:
${reverseJsonArray(input)}

`);

// 4. With a string argument that is not properly formatted JSON
input = 'abc';

console.log(`4. With a string argument that is not properly formatted JSON:
${reverseJsonArray(input)}

`);

// 5. With a stringified-array that only has one value
input = JSON.stringify(['John']);

console.log(`5. With a stringified-array that only has one value:
${reverseJsonArray(input)}

`);

// 6. With a stringified-array that is empty
input = JSON.stringify([]);

console.log(`6. With a stringified-array that is empty:
${reverseJsonArray(input)}

`);

// 7. With a stringified-array that has an even-number of values
input = JSON.stringify([ 'John', 'Peter', 'Sally', 'Jane' ]);

console.log(`7. With a stringified-array that has an even-number of values:
${reverseJsonArray(input)}

`);

// 8. With a stringified-array that has an odd-number of values
input = JSON.stringify([ 'John', 'Peter', 'Sally']);

console.log(`8. With a stringified-array that has an odd-number of values:
${reverseJsonArray(input)}

`);

