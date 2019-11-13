<<<<<<< HEAD
function add(numberFirst = 0){
    let sum = numberFirst;
    function nextNumber(numberNext){
        if(numberNext === undefined) return sum;
        sum += numberNext;
        return nextNumber;
    }
    return nextNumber;
}
console.log(add(10)(8)(9)());
console.log(add(100)());
console.log(add(20)(30)());
console.log(add()());
console.log(add(20)(30)(-10)(34)());
console.log(add(20)(30)(0)());
console.log(add(-20)(0)(0)());
console.log(add(-20)(0)(0)(0)(10)());
console.log(add(10)(10)(-10)(10)(10)(10)(10)(10)());
console.log(1, 2, 10);
=======
Array.prototype.increment = function(){
    for(let i = this.length - 1; i > -1; i--){
        if(this[i] + 1 != 10){
            this[i]++;
            return this;
        } 
        this[i] = 0;
    }  
    this.reverse();
    this.push(1);
    return this.reverse();
}
Array.prototype.decrement = function(){
    return (this.join('') - 1).toString().split('');
}
>>>>>>> ffe34b4b13d491e32d1ec0955d1b5ebc2f638ee4
