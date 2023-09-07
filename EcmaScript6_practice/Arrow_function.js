// Regular function with no parameter:
let regularFunction = function()
{
    return 2;
}

// Arrow function with no parameter:
let ArrowTestOne = () => 2;
let ArrowTestTwo = _ => 2;

// Regular function with one parameter:
let regularFunction_one = function(param)
{
    return 2 * param;
}

// Arrow function with two parameters
let ArrowTestThree = (param) => 2 * param;
let ArrowTestFour = param => 2 * param;

// Regular function with multiple parameters
let regularFunction_two = function(param1, param2)
{
    return (param1 * param2);
}

// Arrow function with multiple parameters
let ArrowTestFive = (param3, param4) => param3 * param4;

console.log(ArrowTestFive(20, 9));