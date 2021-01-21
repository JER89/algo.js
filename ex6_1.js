
class Circle {
    constructor(xPos, yPos, radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }

    /* get surface() {
        return Math.PI*Math.pow(this.radius,2);
    } */
       get surface() {
            return Math.PI * this.radius * this.radius; 
    } 

    move(xOffset, yOffset) {
        this.xPos += xOffset;
        this.yPos += yOffset;
    }
}

let object = new Circle ( 1,2,3);

console.log(object.surface)
object.move (5,7);
console.log(object);



