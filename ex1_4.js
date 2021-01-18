
const readlineSync = require("readline-sync");

let city = readlineSync.question( "Town ? " );
let name = readlineSync.question( "name ? " );
let firstName = readlineSync.question( "firstname ? " );

console.log( "Your name is" + name + "" + firstname + "and you live in " + city);
