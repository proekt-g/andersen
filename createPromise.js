function createPromise(value, time, multi = 1, err = false){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!err){
                resolve(value);
            }
            else reject(value);
        }, time * multi);
    });
}