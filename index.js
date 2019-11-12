Array.prototype.increment = function(){
    for(let i = this.length - 1; i > -1; i--){
        if(this[i] + 1 != 10){
            this[i]++;
            return this;
        } 
        this[i] = 0;
    }  
    this.reverse();
    this.push(1);
    return this.reverse();
}
Array.prototype.decrement = function(){
    return (this.join('') - 1).toString().split('');
}