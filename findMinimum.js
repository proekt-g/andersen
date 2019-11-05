function doit(arr){
  let min = arr[0];
  for(let value of arr){
    if(value < min) min = value;
  }
  return min;
}