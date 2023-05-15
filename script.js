//complete this code
class Rectangle {
    constructor(width,height){
        this._width = width
        this._height = height
    }
    get width(){
        return this._width;
    }
    get height(){
        return this._height;
    }
    getArea(){
        return this._width*this._height
    }
}

class Square extends Rectangle {
    constructor(width,height){
        super(width,height);
    }
    getPerimeter(){
        return 4*this._height;
    }
}

let rec = new Rectangle(2,2);
console.log(rec.width);
console.log(rec.height);
console.log(rec.getArea())

let sq = new Square(2,2);
console.log(sq.getPerimeter());

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
