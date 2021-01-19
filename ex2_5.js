
const readlineSync = require("readline-sync");

let number = readlineSync.question("What's your favorite number ? ");
while ((Number(number)) != 42 ) {
    console.log("Sure? Try again!");
    number = readlineSync.question("What's your favorite number ?");
}

console.log("Perfect!");
