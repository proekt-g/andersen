function createBird(){
    return {
        distance: 0,
        fly: function(count = 1){
            this.distance += count;
            return this;
        },
        getDistance: function(){ return this.distance; },
        compareWith: function(otherBird){
            if(otherBird.distance < this.distance) return "I win";
            return "Another bird win"
        }
    }
}

const bird1 = createBird();
const bird2 = createBird();
const bird3 = createBird();

bird1.fly()
bird1.fly()
console.log(bird1.getDistance()); // 2

bird2.fly().fly().fly()
console.log(bird2.getDistance()); // 3

bird2.fly(3)
console.log(bird2.getDistance()); // 6

bird1.fly(2).fly().fly(1)
console.log(bird1.getDistance()); // 6

bird1.fly(3)
console.log(bird1.getDistance()); // 9

bird3.fly(2)
console.log(bird2.compareWith(bird3)); // 'I win'
console.log(bird1.compareWith(bird3)); // 'I win'
console.log(bird3.compareWith(bird1)); // 'Another bird win'

bird3.fly(50)
console.log(bird1.compareWith(bird3)); // 'Another bird win'