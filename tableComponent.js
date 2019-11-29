function module(){
	class TableComponent { 
		constructor(element){
			this.anchor = element;
		}
		onInit(){ }
		onPropsChanges(){ }
		set props(value){
			this._props = value;
			this.onPropsChanges(this._props);
			if(this._props.list !== undefined) this.anchor.innerHTML = this.render();
		}
		render(){ 
			return `
			<table>
				${
					this._props.list.map((item) => `
						<tr>
							<td>${item.name}</td>
						</tr>
					`).join('')
				}
			</table>
			`;
		}
	}
	return {
		TableComponent
	}
}