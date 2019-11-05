function doit(arr){
  let max;
  for(let value of arr){
    if(value > max || max === undefined) max = value;
  }
  return max;
}