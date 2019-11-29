function module(){
	class Component{
		constructor(value){
			this.anchor = value;
		}
		onInit(){ }
		onPropsChanges(){ }
		render() { } 
		set props(value){
			this._props = value;
			this.onPropsChanges(this._props);
			if(this.render() !== undefined) this.anchor.innerHTML = this.render();
		}
		get props(){
			return Object.assign({}, this._props);
		}
	}
	return {
		Component
	}
}
const mod = module()
const element = document.createElement('div');
const component = new mod.Component(element);
component.render = function() { return `
	<button type="button">
		${this.props.btnName}
	</button>
`};
component.props = { btnName: 'Test name' };
console.log(element.querySelector('button'));
console.log(element.querySelector('button').innerText.trim());
document.body.appendChild(element);