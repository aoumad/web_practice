let p = new Promise((resolve, reject) => {
    let a = 1 + 4;
    if (a == 2)
        resolve('Successfully resolved the promise!');
    else
    {
        reject('Failed!');
    }
})

p.then((message) => {
    console.log('This is in the then and it ' + message);
}).catch((message) => {
    console.log('This is in the catch ' + message);
})

//***************************************************************************************************** */

const typeOne = new Promise((resolve, reject) => {
    resolve('type 1 done');
})

const typeTwo = new Promise((resolve, reject) => {
    resolve('type 2 done');
})

const typeThree = new Promise((resolve, reject) => {
    resolve('type 3 done');
})

Promise.all([typeOne,typeTwo, typeThree]).then((messages) => {
    console.log(messages)
})