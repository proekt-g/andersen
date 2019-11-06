function add(firstNumber = 0){
  let functionSum = (x, y) => x + y;
  function nextNumber(...arg){
    return lastNumber => {
      if (lastNumber === undefined) {
        return arg.reduce((accumulator, currentValue) => {
          return functionSum.call(functionSum, accumulator, currentValue);
        }, firstNumber);
      }
      return nextNumber(...arg, lastNumber);
    };
  };
  return nextNumber();
};