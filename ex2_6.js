
const readlineSync = require("readline-sync");

let num =readlineSync.question("Please, enter a number between 1 and 7 : ");

while ((Number(num)) == 1) {
    console.log ("It's Monday!");
    num = readlineSync.question(" Another one? ");
}

 if ((Number(num)) == 2) {
    console.log ("Oh! It's Tuesday! ");
    num = readlineSync.question(" Another one? ");
}

if ((Number(num)) == 3) {
    console.log ("Wednesday ;) ");
    num = readlineSync.question(" Another one? ");
}

if ((Number(num)) == 4) {
    console.log ("Today is another day : Thursday");
    num = readlineSync.question(" Another one? ");
}

if ((Number(num)) == 5) {
    console.log ("This is the last day of the week ! It's Friday!");
    num = readlineSync.question(" Another one? ");
}

if ((Number(num)) == 6) {
    console.log ("C'est le weekend!! Today it's saturday");
    num = readlineSync.question(" Another one? ");
}

if ((Number(num)) == 7) {
    console.log ("Baaad! It's already Friday...");
    num = readlineSync.question(" Another one? ");
}

else {
    console.log ("Ops! There are only 7 days in a week!");
}

