// let greet = () => 
// {
//     console.log('Hello world!!');
// }

let greet: Function;

greet = () => 
{
    console.log('Hello world!!');
}

greet();

const add = (a: number, b : number, c?: number | string) : void =>
{
    console.log(a + b);
    console.log(c);
}

add(5,3)