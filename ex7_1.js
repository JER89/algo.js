
const readlineSync = require("readline-sync");

var number = Math.floor(Math.random() * 100) + 1;

let user = readlineSync.question("Enter a number between 1 and 100 : ");

while ((Number(user)) != number) {

    if (((Number(user)) < number)) {
        console.log("Is too small");
        user = readlineSync.question ("Try again ");
    } 

    else {
        console.log("Is too big ");
        user = readlineSync.question("Try again ");
    }

 }

console.log("BINGO!");



    