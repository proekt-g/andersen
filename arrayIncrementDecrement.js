Array.prototype.increment = function(){
    return arrayChanges((Number(this.join('')) + 1).toString().split(''));
}
Array.prototype.decrement = function(){
    return arrayChanges((this.join('') - 1).toString().split(''));
}
function arrayChanges(arr){
    let newArr = [];
    for(let value of arr){
        newArr.push(Number(value));
    }
    return newArr;
}

console.log([2, 3, 4, 5, 2].decrement());
console.log([2, 3, 4, 6, 0].decrement());
console.log([2, 3, 5, 0, 0].decrement());
console.log([1, 0, 0, 0, 0, 0].decrement());
console.log([2, 3, 9, 1, 0].decrement());
console.log([2, 0, 0, 1, 0].decrement());
console.log([1, 0].decrement());
console.log([9].decrement());
console.log([1, 0, 0].decrement());