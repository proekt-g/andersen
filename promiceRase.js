function promiseRace(arrPromise){
  const promise = new Promise((resolve, reject) => {
    for(let value of arrPromise){
      value
        .catch(result => {
          reject(result);
        })
        .then(result => {
          if(result !== undefined) resolve(value);
        })
    }
  });
  return promise;
}
let res;
promiseRace([
  Promise.reject(1100),
  Promise.resolve(12),
  Promise.resolve(189),
]).catch(r => res = r);

setTimeout(() => {
    console.log(res);
}, 0);