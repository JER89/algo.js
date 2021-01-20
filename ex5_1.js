
const readlineSync = require("readline-sync");

let task = {
    serie : "",
    year : 0,
    name : []
};


function askTVserie () {
    task.serie = readlineSync.question("What's your favorite serie? ");
    task.year = Number (readlineSync.question("Year of achievement?"));
    task.name = (readlineSync.question("Name of the actors"));

     
    return task;
    
}

console.log(askTVserie());



