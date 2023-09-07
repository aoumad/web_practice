/*
    Destructuring:
    - Object
    - Array
    - Parameter
*/

let name = 'Abderazzak',
    age = 22,
    city = 'Marrakesh';

var user = 
{
    name: 'Abdo',
    age: 22,
    gender: 'male',
    city: 'Marrakesh',
    School: '1337 coding school',
    langs:
    {
        C: '80%',
        C_PlusPlus: '80%',
        Java: '50%'
    }
};

// OLD way (before ES6)
var u = user.name;
var g = user.age;
var user_two = user;

console.log(user_two.city);

console.log(`Hello I am ${u} and i have ${g}
I live in ${user_two.city} and I am studying in ${user.School}`);

// The new Way (thanks to ES6)

// const { name, age, city, School} = user; (in case the variables names was never declared before)
({name: MyName, age, city, School, langs: {C, C_PlusPlus, Java, JS =  '15%'}} = user); // a parenthese between them because it's an expression


console.log("\n\n\n");

console.log(`Hello I am ${MyName} and i have ${age}
I live in ${city} and I am studying in ${School}
My knowledge in C is: ${C}`);