
const readlineSync = require("readline-sync");

let n = readlineSync.question("Enter a new number please: ");
let sum = 0;

for ( let i = 0; i < n; i++) {
    let a =  Number (readlineSync.question("Enter a new number to add: "));
    sum = sum + a;
}

console.log(sum);
