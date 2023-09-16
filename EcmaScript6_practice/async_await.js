// Before using async/await
// const students = [
//     { fullName : "John Doe", age: 23},
//     { fullName : "Michael Smith", age: 25}
// ];

// function addStudent(student, callback)
// {
//     setTimeout(() => {
//         students.push(student);
//         callback();
//     }, 1000);
// }

// function getStudents() {
//     setTimeout(() => {
//         console.log(students);
//     }, 500)
// }

// addStudent({ fullName : "Abdo Oumad", age: 22}, getStudents);

//using Async/Await

const students = [
    { fullName : "John Doe", age: 23},
    { fullName : "Michael Smith", age: 25}
];

function addStudent(student, callback)
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            students.push(student);
            resolve()
        }, 1000)
    })
}

function getStudents() {
    setTimeout(() => {
        console.log(students);
    }, 500)
}

async function main()
{
    await(addStudent({ fullName : "Abdo Oumad", age: 22}, getStudents));

    getStudents();
}

main();