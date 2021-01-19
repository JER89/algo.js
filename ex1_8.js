
const readlineSync = require("readline-sync");

let name = readlineSync.question ("What's your name? [Three question left] ");

let color = readlineSync.question ("What's your favorite color? [Two questions left] ");

let from = readlineSync.question ("Where are you from? [One question left] ");

let astrosign = readlineSync.question("What's your astrological sign? [Last question] ");


console.log (" Hi " + name + " ,it's good to see you! " + " Your favorite color is " 
+ color + " , Good choice! " + " You lives in " + from + " . " + " Your astrologic sign is " + astrosign + ". Good morning Sir! " );



