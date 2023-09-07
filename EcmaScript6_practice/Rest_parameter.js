function addAll(...myParams)
{
    let num = 0;

    for (let myParam of myParams)
    {
        num += myParam;
    }
    return num;
}

console.log(addAll(8,9889,5,-565,6000));