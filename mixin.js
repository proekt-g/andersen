    function mixin(prototype1, prototype2){ 
        prototype1 = Object.create(prototype2);
        return Object.create(prototype1);
    }

function Shape() {}
function Drawable() {}
function Chainable() {} 
const originalPrototype = Shape.prototype;
Drawable.prototype.draw = function() {}
Chainable.prototype.chain = function() {}
Shape.prototype = mixin(Drawable.prototype, Chainable.prototype);
// console.log(Shape.prototype); // (originalPrototype)
// console.log(Shape.prototype.__proto__.__proto__); // (Object.prototype)
// console.log(Drawable.prototype.__proto__); // (Object.prototype)
// console.log(Shape.prototype.__proto__.__proto__); // (Object.prototype)
// console.log(Chainable.prototype.__proto__); // (Object.prototype)
// console.log(Shape.prototype.__proto__.draw); // (undefined)
// console.log(Shape.prototype.__proto__.chain); // (undefined)
// console.log(Shape.prototype.__proto__.chain); // (Chainable.prototype.chain)
// console.log(Shape.prototype.__proto__.draw); // (Drawable.prototype.draw)
