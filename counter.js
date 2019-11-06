function doit(){
    let result = 0;
    return () => result += 1;
}