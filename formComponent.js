function module(){
    class FormComponent {
        constructor(element){
            this.anchor = element;
        }
        onInit() { }   
        onPropsChanges() { }  
        set props(value){
            this._props = value;
            if(this.anchor !== undefined) { 
                this.anchor.appendChild(document.createElement("form"));
                for(let i in this._props){
                    let inputelement = document.createElement("input");
                    inputelement.addEventListener("change", (event) => {
                        this._props[i].onChanges(event.target.value);
                    })
                    inputelement.name = i;
                    inputelement.value = this._props[i].value;
                    this.anchor.appendChild(inputelement);
                }
            }
        } 
        get props(){
            return this._props; 
        } 
    }
    return {
        FormComponent
    }
}