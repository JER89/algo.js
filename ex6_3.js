class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {

        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }

    collides(otherRectangle) {
       
        if(((this.topLeftXPos === otherRectangle.topLeftXPos) &&
           (this.topLeftYPos === otherRectangle.topLeftYPos)) &&
           ((this.width === otherRectangle.width) &&
           (this.length === otherRectangle.length))) {
               return true;
           }
               return false;
           
    
    }


    view() {
        for (let i = 0; i <= 1000; i++) {
            Rectangle2 = new Rectangle(
                Math.floor((Math.random()*9)+1),
                Math.floor((Math.random()*9)+1),
                Math.floor((Math.random()*9)+1),
                Math.floor((Math.random()*9)+1)
            );
            
            console.log(Rectangle2);
            console.log(Rectangle1.collides(Rectangle2));
        }

       

    } 
}

let Rectangle1 = new Rectangle (2,4,2,4);
let Rectangle2 = new Rectangle();

console.log(Rectangle1.view());
