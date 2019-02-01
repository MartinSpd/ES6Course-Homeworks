/**
    Destructuring syntax is a JavaScript expression, that helps 
    extract data from arrays or JSON objects into vasriables 
    without need of a lot of code. Destructuring syntax is used 
    on left hand side 
*/


    /** 
     * DESTRUCTURING AN ARRAY
     * 
     */

const arr = ['a', 'b', 'c', ['d', 'e', 'f']];

let a, b, c, d, e, f, g, h;

[a, b, c, [d, e, f, g, h = 'empty']] = arr;

console.log(`a = ${a}, b = ${b}, c = ${c},
d = ${d}, e = ${e}, f = ${f}, 
g = ${g}, h = ${h}`);

// swapping values of variables
[a, b] = [b, a];
console.log(`a = ${a}, b = ${b}`);

// use in function - e.g. find value in an array
function findValue(arr, value) {
    return arr.filter((v) => v === value);
}
const [result] = findValue(['a', 'b', 'c'], 'b')
console.log(result);

// ignoring values
const [aa, , cc, ] = arr;
console.log(`a = ${aa}, c = ${cc}`);

// using rest
function consoleOutData1(a, b, ...c) {
  console.log(`a = ${a}, b = ${b}, ...c = ${c}`);
}

consoleOutData1('aa', 'bb', ['x', 'y', 'z']);



    /**
     * DESTRUCTURING AN OBJECT
     * 
     */

    const contact = { 
        firstName: 'John',
        lastName: 'Doe',
        contacts: [{
            phoneNumber: '+009012356789',
            type: 'mobile',
            other1: { note: 'nothing 1' }
        },{
            phoneNumber: '+009012356780',
            type: 'home',
            other1: { note: 'nothing 2' }
        }]
    };

const { firstName, lastName, contacts} = contact;
const [{ phoneNumber, type, other1}] = contacts;
const { note } = other1;

console.log(firstName);
console.log(phoneNumber);

// reassigning variable names
const { firstName: name, b, c } = contact;
console.log(name); 

// setting deffault values to property
const { a, bb, cc, other2 = 'nothing' } = contact;
console.log(other2);

// use in functions
function consoleOutData2({firstName = 'Bob', lastName, contacts}) {
  console.log(`firstName = ${firstName}`);
  console.log(`lastName = ${lastName}`);
  console.log(`contacts = ${contacts}`);
}

consoleOutData2({lastName: 'Does'});

for (const {phoneNumber, type, other1} of contacts) {
  console.log(`phoneNumber = ${phoneNumber}, type = ${type}, note = ${note}`);
}


