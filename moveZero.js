function move(arrNumber){
    const newArray = arrNumber.filter(number => number != 0 );
    const difference = arrNumber.length - newArray.length;
    for(let i = 0; i < difference; i++){
        newArray.push(0);
    }
    return newArray;
}