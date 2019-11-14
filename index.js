const catsArray = [];

function createCat(age, name) {
    const cat = {
        catsAge: age,
        catsName: name,
        meow: function() { return 'My name is ' + this.catsName + '!'; },
        myAge: function() {
            if (this.catsAge < 10) { return 'My age is ' + this.catsAge; }
            return 'I am too old...';
        },
        myOrder() { return `I am cat №${catsArray.indexOf(this.catsAge) + 1} in family`; }
    };
    catsArray.push(cat.catsAge);
    catsArray.sort(function (value1, value2) { return value2 - value1; });
    return cat;    
}