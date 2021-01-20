
const readlineSync = require("readline-sync");


let array = [1,2,3,4,5];
let reducer = ( accumulator, currentValue) => accumulator + currentValue;

console.log(array.reduce(reducer));




