function mixin(prototype1, prototype2){
    return Object.create(Object.assign({}, prototype1, prototype2));
}