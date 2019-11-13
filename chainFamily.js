function chain(...args){
    args.reverse();
    for(let i = 0; i < args.length - 1; i++){
<<<<<<< HEAD
        args[i].prototype = Object.create(args[i + 1].prototype);
    }
    return args[0].prototype;
}

function Shape() {}
function Polygon() {}
Polygon.prototype.draw = function() {}
=======
        args[i].prototype = args[i + 1].prototype;
    }
    return args[0]
}
function Shape() {}
Polygon.prototype.draw = function() {}
function Polygon() {}
>>>>>>> ce69cee8a501ae0a299d70afcb059a97671bd3a4
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
<<<<<<< HEAD

console.log(ExtendedSquare.getArea); // notToBe(undefined);
// console.log(ExtendedSquare.setNumbersOfAngles); // notToBe(undefined);
// console.log(ExtendedSquare.getNumbersOfAngles); // notToBe(undefined);
// console.log(ExtendedSquare.draw); // notToBe(undefined);
=======
console.log(ExtendedSquare.getArea); // notToBe(undefined);
// assert(ExtendedSquare.setNumbersOfAngles).notToBe(undefined);
// assert(ExtendedSquare.getNumbersOfAngles).notToBe(undefined);    
// assert(ExtendedSquare.draw).notToBe(undefined);
>>>>>>> ce69cee8a501ae0a299d70afcb059a97671bd3a4
