function createBlock(value, next){
    return {
        getVal: function(){ return value; },
        getNext: function(){ 
            if(next === undefined) { return null; }
            return next;
        },
        link: function(newBlock){ next = newBlock; }
    }
}
 
const block = createBlock({ m: 'MVar' })


console.log(block.getVal()); // { m: 'MVar' }
console.log(block.getNext()); // null


block.link(createBlock({ f: 'FVar' }));
console.log(block.getVal()); // { m: 'MVar' }
console.log(block.getNext().getVal()); // { f: 'FVar' }
console.log(block.getNext().getNext()); // null

block.getNext().link(createBlock({ sd: 'SDVar' }, { l: 'LVar' }))
console.log(block.getNext().getVal()); // { f: 'FVar' })
console.log(block.getNext().getNext().getVal()); // { sd: 'SDVar' }
const block2 = createBlock({"n": "NVal"})
console.log(block2.getVal());