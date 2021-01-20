
const readlineSync = require("readline-sync");

function grab() {
    n = new Number(readlineSync.question("Enter a number: "));
}

function factorial(n) {
    if (n < 0) {
        exit (EXIT_FAILURE);
    }
    else if (n == 1) {
        return 1;
    }
    return n * factorial (n - 1);
}

grab();

console.log(factorial(n));
