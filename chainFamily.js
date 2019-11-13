function chain(...args){
    args.reverse();
    for(let i = 0; i < args.length - 1; i++){
        args[i].prototype = Object.create(args[i + 1].prototype);
    }
    return args[0].prototype;
}

function Shape() {}
function Polygon() {}
Polygon.prototype.draw = function() {}
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
// console.log(ExtendedSquare.setNumbersOfAngles); // notToBe(undefined);
// console.log(ExtendedSquare.getNumbersOfAngles); // notToBe(undefined);
// console.log(ExtendedSquare.draw); // notToBe(undefined);