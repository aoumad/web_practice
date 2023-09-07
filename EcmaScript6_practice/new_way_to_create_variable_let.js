/*

Function Scope ==> var

Block Scope ==> let - const

*/

// function VarTest()
// {
//     var x = 1;

//     if (true)
//     {
//         var x = 2;

//         console.log(x);
//     }

//     console.log(x);

//     return ("Done");
// }

// console.log(VarTest());


function LetTest()
{
    let x = 1;

    if (true)
    {
        let x = 2;
        console.log(x);
    }
    console.log(x);
    return ('Done');
}

console.log(LetTest());
