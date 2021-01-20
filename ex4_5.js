

let xA = 1;
let xB = 3;
let yA = 1;
let yB = 2;

function calcDistance(xA, yA, xB, yB) {

return Math.sqrt(((yB - yA) * (yB - yA)) + ((xA - xB) * (xA-xB)));
}


console.log("distance = " + calcDistance(xA, yA, xB, yB))

