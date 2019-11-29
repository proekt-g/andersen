function Block(){
	this.block = document.createElement("div");
}
Block.prototype.export = function() {
	return this.block;
}
Block.prototype.addChild = function(...child) {
	for(let value of child){
		if(Array.isArray(value)){
			for(let insideValue of value){
				this.block.appendChild(insideValue);
			}
		} else this.block.appendChild(value);
	}
}
Block.prototype.onClick = function(func){
	this.block.addEventListener("click", func);
}
Block.prototype.onHover = function(func){
  	this.block.addEventListener("mouseover", func); 
}
Block.prototype.setSelfTo = function(element){
	element.appendChild(this.block);
}