function chain(...args){
    for(let i = 0; i < args.length - 1; i++){
        args[i + 1].prototype.__proto__ = Object.create(args[i].prototype)
    }
    return new args[args.length - 1]();
}

function Shape() {}
function Polygon() {}
function Square(sizeSize) {
    this.sizeSize = sizeSize;
}
Polygon.prototype.draw = function() {}
Polygon.prototype.getNumbersOfAngles = function() {
    return this.anglesNumber;
}
Polygon.prototype.setNumbersOfAngles = function(num) {
    this.anglesNumber = num;
}
Square.prototype.getArea = function() {
    return this.sizeSize * this.sizeSize;
}   
const ExtendedSquare = chain(Square, Polygon, Shape);

console.log(ExtendedSquare.getArea); // notToBe(undefined);
console.log(ExtendedSquare.setNumbersOfAngles); // notToBe(undefined);
console.log(ExtendedSquare.getNumbersOfAngles); // notToBe(undefined);
console.log(ExtendedSquare.draw); // notToBe(undefined);