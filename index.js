function module(){
    class Observer {
        constructor(){
            this.observer = [];
        }
        subscribe(func){
            this.observer.push(func);
            this.unsubscribeObserver = func;
            return this;
        }
        sbscribtionLength(){
            return this.observer.length;
        }
        next(value){
            this.observer.forEach((element, i) => {
                if(this.changeObserver !== undefined && this.changeObserver.count == i){
                    switch(this.changeObserver.type){
                        case `map`: element(this.changeObserver.func(value)); break;
                        case `filter`: if(this.changeObserver.func(value)) element(value); break;
                    }
                }else element(value);
            });
        }
        map(func){
            this.changeObserver = { func, count: this.observer.length, type: `map` };
            return this;
        }
        filter(func){
            this.changeObserver = { func, count: this.observer.length, type: `filter` };
            return this;
        }
        unsubscribe(){
            this.observer.forEach((element, i) => {
                if(element === this.unsubscribeObserver) this.observer.splice(i, 1);
            });
        }
    }
    return {
        Observer
    }
}

let res1;
let res2;
const mod = module()
const obs = new mod.Observer();
const subscription1 = obs.subscribe(value => res1 = value);
const subscription2 = obs.subscribe(value => res2 = value);
obs.next(10);

console.log(res1); //.toBe(10);
console.log(res2); //.toBe(10);

subscription2.unsubscribe()

obs.next(12);
console.log(res1); //.toBe(12);
console.log(res2); //.toBe(10);