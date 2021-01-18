
const readlineSync = require("readline-sync");

let num1 = new Number (readlineSync.question ("shoes size?"));
let num2 = new Number (readlineSync.question("Birthday?"));

console.log(num1 * 2);

console.log((num1*2)+5);

console.log(((num1*2)+5)*50);

console.log((((num1*2)+5)*50)-num2);

console.log(((((num1*2)+5)*50)-num2)+1766);

