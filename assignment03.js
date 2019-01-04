'use strict';

/*
    Homework Assignment #3: Statements and Operators

*/

const statement1 = 'All men are mortal';
const statement2 = 'Socrates is a man.';
const statement3 = 'Therefore, Socrates is mortal.';

const resolve1 = {
    gender: null,
    mortal: false
};

const resolve2 = {
    name: null,
    gender: null
};

    if (statement1 === 'All men are mortal') {
        console.log(statement1);
        resolve1.gender = 'male';
        resolve1.mortal = true;
    }

    if (statement2 === 'Socrates is a man.') {
        console.log(statement2);
        resolve2.name = 'Socrates';
        resolve2.gender = 'male';
    }

    if ((resolve1.gender === resolve2.gender)
         && (resolve1.mortal)
         && (resolve2.name === 'Socrates')) {
             console.log(statement3);
         }
    else { console.log(statement3) + ' ... or not?'; }



    // EXTRA CREDIT

    const statement1 = 'This cake is either vanilla or chocolate.';
    const statement2 = 'This cake is not chocolate.';
    const statement3 = 'Therefore, this cake is chockolate.';
    const statement4 = 'Therefore, this cake is vanilla.';
    
    const cake = {
        chockolate: false,
        vanila: false
    };

    console.log(statement1);

    if (statement2 === 'This cake is not chocolate.') {
        console.log(statement2);
        cake.vanila = true;
    }

        if (!((!cake.chockolate) && (!cake.vanila)) &&
             ((!cake.chockolate) || (!cake.vanila))) {
            if (cake.chockolate) { console.log(statement3); }
             else if (cake.vanila) { console.log(statement4); }
        }