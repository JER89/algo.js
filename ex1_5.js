
const readlineSync = require("readline-sync");

let Num1 = new Number ( readlineSync.question ("Number with decimal"));
let Num2 = new Number (readlineSync.question("Number with decimal"));

console.log(Math.trunc(Num1)*(Num2));