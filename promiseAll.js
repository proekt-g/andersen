function promiseAll(arrPromise){
    const arrResolve = [];
    const promise = new Promise(function(resolve,reject) {
        arrPromise.forEach((element, i) => {
            element
            .then(result => { arrResolve[i] = result }, reject)
            .then(() => {
                if(--arrPromise.length === 0) resolve(arrResolve)
            })
        })
    })
    return promise;
}
// Promise.all polyfill
function all(promises) {
    return 
  }

let res;
	promiseAll([
      new Promise(
        (resolve, reject) => setTimeout(() => resolve(3465), 20)
      ),
      new Promise(
        (resolve, reject) => setTimeout(() => resolve(345), 89)
      ),
      new Promise(
        (resolve, reject) => setTimeout(() => resolve(12), 12)
      ),
      new Promise(
        (resolve, reject) => setTimeout(() => resolve(927), 5)
      ),
      new Promise(
        (resolve, reject) => setTimeout(() => resolve(67), 100)
      ),
    ]).then(r => res = r);
setTimeout(() => console.log(res), 5000);
