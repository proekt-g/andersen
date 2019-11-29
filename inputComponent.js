function InputComponent(){
	this.component = document.createElement("input");
}
InputComponent.prototype.export = function(){
	return this.component;
}
function eventListing(event, arrFunc){
	for(let value of arrFunc){
		if(Array.isArray(value)) eventListing.call(this, event, value);
		else this.component.addEventListener(event, value);
  	}
}
InputComponent.prototype.onClick = function(...func){
	eventListing.call(this, "click", func); 
}
InputComponent.prototype.onKeypress = function(...func){
	eventListing.call(this, "keypress", func);
}
InputComponent.prototype.setSelfToForm = function(element){
	if(element.tagName == "FORM") element.appendChild(this.component);
}
InputComponent.prototype.setValue = function(value){
	this.component.value = value;
}