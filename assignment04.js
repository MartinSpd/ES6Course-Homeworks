'use strict';

/*
    Homework Assignment #4: Functions

*/

const statement1 = 'All men are mortal';
const statement2 = 'Socrates is a man.';
const statement3 = 'Therefore, Socrates is mortal.';

const man = {
    name: null,
    gender: null,
    isMortal: null
};

console.log(statement1);

function isMortal(name) {

    if (name !== undefined || null) {

        if (statement2 === 'Socrates is a man.' &&
            (name === 'Socrates')) {
            console.log(statement2);
            man.name = name;
            man.gender = 'male';
        }

        if ((man.name === 'Socrates') && 
            (man. gender === 'male')) {
            console.log(statement3);
            man.isMortal = true;
            console.log(man.isMortal);
            return man.isMortal;
        }
        else console.log('Where is Socrates?');
    }
    else console.log('Name was not defined.');
}

console.log('Is Martin mortal?' + ' ' + isMortal('Martin') + '\n\n');
console.log('Is null mortal?' + ' ' + isMortal(null) + '\n\n');
console.log('Is undefined mortal?' + ' ' + isMortal(undefined) + '\n\n');
console.log('Is socrates mortal?' + ' ' + isMortal('socrates') + '\n\n');
console.log('Is Socrates mortal?' + ' ' + isMortal('Socrates') + '\n\n');







// const statement1 = 'All men are mortal';
// const statement2 = 'Socrates is a man.';
// const statement3 = 'Therefore, Socrates is mortal.';

// const resolve1 = {
//     gender: null,
//     mortal: false
// };

// const resolve2 = {
//     name: null,
//     gender: null
// };

//     if (statement1 === 'All men are mortal') {
//         console.log(statement1);
//         resolve1.gender = 'male';
//         resolve1.mortal = true;
//     }

//     if (statement2 === 'Socrates is a man.') {
//         console.log(statement2);
//         resolve2.name = 'Socrates';
//         resolve2.gender = 'male';
//     }

//     if ((resolve1.gender === resolve2.gender)
//          && (resolve1.mortal)
//          && (resolve2.name === 'Socrates')) {
//              console.log(statement3);
//          }
//     else { console.log(statement3) + ' ... or not?'; }



//     // EXTRA CREDIT

//     const statement1 = 'This cake is either vanilla or chocolate.';
//     const statement2 = 'This cake is not chocolate.';
//     const statement3 = 'Therefore, this cake is chockolate.';
//     const statement4 = 'Therefore, this cake is vanilla.';
    
//     const cake = {
//         chockolate: false,
//         vanila: false
//     };

//     console.log(statement1);

//     if (statement2 === 'This cake is not chocolate.') {
//         console.log(statement2);
//         cake.vanila = true;
//     }

//         if (!((!cake.chockolate) && (!cake.vanila)) &&
//              ((!cake.chockolate) || (!cake.vanila))) {
//             if (cake.chockolate) { console.log(statement3); }
//              else if (cake.vanila) { console.log(statement4); }
//         }
/*
Details:
 
Let's go back to your syllogism (logical argument) examples from 
Homework #3. Now it's time to turn those loose bits of logic int
o functions. Rather than having procedure that demonstrates that 
Socrates is mortal, you should create a function that accepts a 
name and returns a boolean (True or False) representing whether 
that name identifies a man who is mortal or not. Your function t
o gracefully handle unexpected inputs (such as an unrecognized n
ame or a name that is a not a string at all) without throwing an 
exception.


Extra Credit:

If you did the extra credit on Homework #3, let's turn that exam
ple into a function as well. It should accept in 2 arguments:

1. An array of all cake possibilities (vanilla or chocolate)

2. A boolean representing whether or not the cake is chocolate.

It should return a string indicating the actual flavor of the ca
ke.
*/