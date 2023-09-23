// Explicit types

let school : number;
let department: string;

// school = 'Coding School';
school = 1337;

department = 'IT';
// department = 333; 
// it will shows an error because of the uncompatible types


// Arrays
let ninjas: string[];

// Union types
let mix: (string| number)[] = [];
mix.push(33);
mix.push('String');
// mix.push(false);

// Objects