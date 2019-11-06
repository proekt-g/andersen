function doit(numberFloors){
    let tower = [];
    let floor = '';
    for(let i = 0; i < (numberFloors * 2 - 1); i++) floor += "*";
    for(let i = 0; i < numberFloors * 2; i++){
        if(i == 0 || i % 2 == 0) tower.push(floor);
        floor = floor.replace("*", " ").split('').reverse().join("");
    }
    return tower.reverse();
}