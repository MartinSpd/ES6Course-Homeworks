'use strict';

/**
   Homework Assignment #6: Loops
   
 */

for (let i = 1; i <= 100; i++) {

    // help variables to determine if number
    // is a prime number or not
    let count = 0, isPrime = false;

        // brute-force check if number is
        // prime
        for(let j = 1; j <= i; j++) {
            if(i % j === 0) { count++; }
        }

    // if can be divided more than twice (number
    // 1 and itself) it's not a prime number
    if (count === 2) { isPrime = true; }

    // checks to replace number with strings
    if (i % 15 === 0) { console.log('FizzBuzz'); }
    else if (i % 3 === 0) { console.log('Fizz'); }
    else if (i % 5 === 0) { console.log('Buzz'); }
    else if (i === 1) { console.log('prime'); }
    else if (isPrime) { console.log('prime'); }
    else { console.log(i); }
}