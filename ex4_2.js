
const readlineSync = require("readline-sync");

let min = 1;
let max = 10;

function rand10() {
    return Math.floor(Math.random() * (max - min + 1));
}

console.log("Please enter a random number between 1 and 10: " +rand10() + " another: " +rand10());


/* définir deux variables;
max : le nombre maximum
min: le nombre minimum
Return : un nombre compris entre le minimum et le maximum */



