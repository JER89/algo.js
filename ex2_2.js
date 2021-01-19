
const readlineSync = require("readline-sync");

let min = readlineSync.question("What's your minimum number ? ");
let max = readlineSync.question("What's your maximum number ?");
let current = readlineSync.question("What's your current number ?");

if (((Number(current)) >= (Number(min))) && ((Number(current)) <= (Number(max)))) {
    console.log(current + "is between " + min + "and " + max)
} else {
    console.log(current + "is not between " + min + "and "+ max)
}

if ((Number(min)) > (Number(max))) {
    console.log ("Sorry! Your request is not valid...")
}

