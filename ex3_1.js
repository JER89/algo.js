
const readlineSync = require("readline-sync");

/* let a = [1,2,3,4,5];
let sum = a.reduce(function(a , b) {
    return a + b ; }, 0);

    console.log(sum); */


let array = [1,2,3,4,5];
let reducer = ( accumulator, currentValue) => accumulator + currentValue;

console.log(array.reduce(reducer));



