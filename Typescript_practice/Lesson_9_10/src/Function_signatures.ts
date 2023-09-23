// example 1
let greetAgain : (a: string, b: string) => void;

greetAgain = (name: string, greetingg: string) =>
{
    console.log(`${name} says ${greetingg}`);
} 

// example 2

let calc:  (a: number, b: number, c: string) =>  number;

calc = (numOne: number, numTwo: number, action: string) =>
{
    if (action === 'add')
        return (numOne + numTwo);
    else
        return (numOne - numTwo);
}

// example 3
let logDetails: (obj: {name: string, age: number}) => void;

logDetails = (abdo: {name: string, age: number}) => {
  console.log(`${abdo.name} is ${abdo.age} years old`);
}