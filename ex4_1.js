
const readlineSync = require("readline-sync");

function grab() {
    lenght = new Number(readlineSync.question("Please, enter a lenght: "));
    width = new Number(readlineSync.question("Please, enter a width: "));
}

function calculSurface(lenght , width) {
    return lenght * width;
}

console.log(grab());
console.log(calculSurface(lenght , width));


/* Définir une fonction:
Demander à l'utilisateur d'entrer une longueur et une largeur.

Définir une fonction de calcul de surface: L * W

Exécuter. */


