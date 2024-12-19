// const fs = require('fs');

// fs.writeFile("message.txt", "Hello, Node.js!", (err) => {
//     if (err) throw err;
//     console.log("The file has been saved!");
// });

// fs.readFile('./message.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// const generateName = require('sillyname');

// import generateName from 'sillyname';
// const sillyName = generateName();
// console.log(`My name is: ${sillyName}.`);

// import superheroes from 'superheroes';
import { randomSuperhero } from 'superheroes';

const superHeroName = randomSuperhero();
console.log(`My superhero name is : ${superHeroName}.`);