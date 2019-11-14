const catsArray = [];
function createCat(old, name){ 
    catsArray.push({
        old: old,
        name: name
    });
    catsArray.sort((value1, value2) => {
        return value2 - value1;
    });
    return {
        meow: function(){ return "My name is " + name + "!"; },
        myAge: function(){
            if(old < 10) return "My age is " + old;
            return "I am too old...";
        },
        myOrder: function(){
            for(let value of catsArray){
                console.log(catsArray[value]);
            }
            return `I am cat №${catsArray.indexOf( { old, name } ) + 1} in family`;
        }
    }
}

const cat1 = createCat(10, 'Boris');
const cat2 = createCat(7, 'Robert');
const cat3 = createCat(11, 'Fedor');
const cat4 = createCat(2, 'Doosya');
const cat5 = createCat(6, 'Cooper');
const cat6 = createCat(6, "Mur");
//const cat7 = createCat(6, "Mur");
//const cat8 = createCat(8, "Mur");

console.log(cat1.meow()); // ('My name is Boris!')
console.log(cat2.meow()); // ('My name is Robert!')
console.log(cat3.meow()); // ('My name is Fedor!')
console.log(cat4.meow()); // ('My name is Doosya!')

console.log(cat1.myAge()); // ('I am too old...')
console.log(cat2.myAge()); // ('My age is 7')
console.log(cat3.myAge()); // ('I am too old...')
console.log(cat4.myAge()); // ('My age is 2')
console.log(cat5.myAge()); // ('My age is 6')

console.log(cat1.myOrder()); // ('I am cat №2 in family')
console.log(cat2.myOrder()); // ('I am cat №3 in family')
console.log(cat3.myOrder()); // ('I am cat №1 in family')
console.log(cat4.myOrder()); // ('I am cat №5 in family')
console.log(cat5.myOrder()); // ('I am cat №4 in family')
console.log(cat6.myOrder());