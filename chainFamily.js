function chain(...args){
    args.reverse();
    for(let i = 0; i < args.length - 1; i++){
        args[i].prototype = args[i + 1].prototype;
    }
    return args[0]
}
function Shape() {}
Polygon.prototype.draw = function() {}
function Polygon() {}
Polygon.prototype.getNumbersOfAngles = function() {
    return this.anglesNumber;
}
Polygon.prototype.setNumbersOfAngles = function(num) {
    this.anglesNumber = num;
}
function Square(sizeSize) {
    this.sizeSize = sizeSize;
}
Square.prototype.getArea = function() {
    return this.sizeSize * this.sizeSize;
}
const ExtendedSquare = chain(Square, Polygon, Shape);
console.log(ExtendedSquare.getArea); // notToBe(undefined);
// assert(ExtendedSquare.setNumbersOfAngles).notToBe(undefined);
// assert(ExtendedSquare.getNumbersOfAngles).notToBe(undefined);    
// assert(ExtendedSquare.draw).notToBe(undefined);
