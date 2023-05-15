//complete this code
class Rectangle {
    constructor(width,height){
        this.width = width
        this.height = height
    }
    get widthh(){
        return this.width;
    }
    get heightt(){
        return this.height;
    }
    getArea(){
        return this.width*this.height
    }
}

class Square extends Rectangle {
    constructor(width,height){
        super(width,height);
    }
    getPerimeter(){
        return 4*this.height;
    }
}


// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
