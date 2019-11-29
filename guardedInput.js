function InputGuardedComponent(){
	this.component = document.createElement('input');
	this.predicate = function(){
		return true;
	}
}
InputGuardedComponent.prototype.export = function() {
	return this.component;
}
InputGuardedComponent.prototype.onChange = function(func, predicate = this.predicate){
	if(predicate()) this.component.addEventListener("change", func);
}
InputGuardedComponent.prototype.setValue = function(value){
	if(this.predicate()){
		this.component.value = value;
		this.component.dispatchEvent(new Event('change'));
	}
}
InputGuardedComponent.prototype.setPredicate = function(func){
	this.predicate = func;
}