
class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {

        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }

    collides(otherRectangle) {
       
        let collideRightLeft = 
        this.topLeftXPos + this.length >= otherRectangle.topLeftXPos &&
        otherRectangle.topLeftXPos + otherRectangle.length >= this.topLeftXPos;

        /*let collideTopBottom =
        this.topLeftXPos - this.width >= otherRectangle.topLeftXPos &&
        otherRectangle.topLeftXPos - otherRectangle.width >= this.topLeftXPos;

        return collisionRightLeft && collisionTopBottom*/

        let collideTopBottom = 
        this.topLeftYPos >= otherRectangle.topLeftYPos - otherRectangle.width &&
        otherRectangle.topLeftYPos >= this.topLeftYPos - this.width;

        return collideRightLeft && collideTopBottom
    
    }
}

let Rectangle1 = new Rectangle(2,6,2,6);
let Rectangle2 = new Rectangle (3,5,3,5);
let Both = Rectangle1.collides(Rectangle2);

console.log(Both);
