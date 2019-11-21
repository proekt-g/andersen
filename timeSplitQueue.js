function timeSplit(time, ...arrFunction){
    let count = 0;
    let intervalID = setInterval(() => {
        arrFunction[count]();
        count++;
        if(count == arrFunction.length) clearInterval(intervalID)
    }, time * 1000);
}

let result;
timeSplit(2, () => result = 14, () => result = 89);
setTimeout(() => {
    console.log(result);
    setTimeout(() => {
        console.log(result);
        setTimeout(() => {
            console.log(result);
            setTimeout(() => {
                console.log(result);
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)

