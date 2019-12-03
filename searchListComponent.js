function module(){
    class SearchListComponent {
        constructor(element){
            if(element !== undefined){
                this.anchor = element;
                this.anchor.appendChild(document.createElement("input"));
                this.anchor.querySelector("input").addEventListener("change", (event) =>{
                    if(event.target.value == '') this.props = this.firstList;
                    else{
                        let check = false;
                        for(let value of this.firstList.listData){
                            value.split(' ').forEach(nameProps => {
                                if(nameProps == event.target.value) { 
                                    this.props = { listData: [ value ] };
                                    check = true; 
                                }
                            });
                        } 
                        if(!check) this.props = { listData: [ ] };
                    }
                });
            }
        }
        onInit() { }
        onPropsChanges() { }
        set props(value){
            if(this._props === undefined) this.firstList = value; 
            this._props = value;
            if(this.anchor !== undefined && this._props.listData !== undefined) this.anchor.querySelector("input").innerHTML = this.render();
        }
        get props(){
            return this._props;
        }
        render(){
            return `
            <ul>
                ${
                    this._props.listData.map(item => `
                        <li>${item}</li>
                    `).join('')
                }
            </ul>
            `;
        }
    }
    return {
        SearchListComponent
    }
}