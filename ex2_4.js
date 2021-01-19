
const readlineSync = require("readline-sync");

let i = 1;

while (i <= 100) {
    i += 1;
    console.log(i);
   if (i%2 == 1) {
       console.log(i/2);
   }
   else {
       
       console.log(i*3);
   }
}