
class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {

        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }

    collides(otherRectangle) {
       
        if(((this.topLeftXPos === otherRectangle.topLeftXPos) || 
           (this.topLeftYPos === otherRectangle.topLeftYPos)) || 
           ((this.width === otherRectangle.width) || 
           (this.length === otherRectangle.length))) {
               return true;
           }
               return false;
           
    
    }
}

let Rectangle1 = new Rectangle(2,6,2,6);
let Rectangle2 = new Rectangle(3,5,3,5);

console.log(Rectangle1.collides(Rectangle2));
