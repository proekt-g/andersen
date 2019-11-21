function mult(N){
    const arrNumberOut = [];
    let arrNumberIns = [];
    for(let i = 1; i <= N; i++){
        for(let j = 1; j <= N; j++){
            arrNumberIns.push(j * i);
        }
        arrNumberOut.push(arrNumberIns);
        arrNumberIns = [];
    }
    return arrNumberOut;
}