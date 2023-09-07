let one = 'Rfissa',
    two = 'Tajine',
    three = 'Spaghetti'

const food = ['Couscous', 'Pizza', 'Burger', ["Apple", "Mango", "Ananas"]];

[one, two, three, four = 'Idk', [fr1, fr2, fr3]] = food;

console.log(one);
console.log(two);
console.log(three);
console.log(four);
console.log(fr1);
console.log(fr2);
console.log(fr3);


// Swap Variables using destructuring method

var book = "pdf",
    video = "mp4";

console.log(book);
console.log(video);

[book, video] = [video, book];

console.log(book);
console.log(video);
