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
// import { randomSuperhero } from 'superheroes';
import inquirer from 'inquirer';
import fs from 'fs';
import qr from 'qr-image';

// const superHeroName = randomSuperhero();
// console.log(`My superhero name is : ${superHeroName}.`);
// let name;
 
inquirer
    .prompt([
        /* Pass your questions in here */
        { 
            message: 'Hi! What is your URL?',
            name: 'name'
        }
    ])
    .then((answers) => {
        const name = answers.name;
        const qr_png = qr.image(name, { type: 'png' } );
        qr_png.pipe(fs.createWriteStream(`${name}.png`));

        fs.writeFile("my_qr.txt", name, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
    });
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log(error);
        } else {
            console.log('Something else went wrong');
        }
    });