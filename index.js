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