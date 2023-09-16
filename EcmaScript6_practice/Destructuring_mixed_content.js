const person =
{
    name: 'Abdo',
    age: 22,
    skills:
    {
        C: '80%',
        C_Plus_Plus: '70%',
        Java: '50%',
        JS: ["Reactjs", "nodejs"]
    }
};

const {name, age, skills: {C, C_Plus_Plus, Java, JS: [one, two, three= 'Vuejs']}} = person;

console.log(name);
console.log(age);
console.log(C);
console.log(one);