function box(obj){
    return {
        prop: obj,
        unbox: function(){ 
            if(this.prop.unbox === undefined) return this.prop; 
            return box(this.prop.prop).unbox();
        }
    }
}

const box1 = box({ a: 10 })
const box2 = box(box1)
const box3 = box(box2)

console.log(box1.prop); // ({ a: 10 });
console.log(box2.prop.prop); // ({ a: 10 });
console.log(box3.prop.prop.prop); // ({ a: 10 });

console.log(box1.unbox()); // ({ a: 10 });
console.log(box2.unbox()); // ({ a: 10 });
console.log(box3.unbox()); // ({ a: 10 });

const box4 = box('Nu privet!')
const box5 = box(box4)

console.log(box4.prop); // ('Nu privet!');
console.log(box5.prop.prop); // ('Nu privet!');

console.log(box4.unbox()); // ('Nu privet!');
console.log(box5.unbox()); // ('Nu privet!');