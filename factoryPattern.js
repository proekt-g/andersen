function module(){
    class Factory {}
    class AbstractFactoryContainer{
        constructor(type){
            if(type instanceof InputComponentFactory){
                this.employee = new InputComponent();
            }else if(type instanceof CheckboxComponentFactory){
                this.employee = new CheckboxComponent();
            }else if(type instanceof TitleComponentFactory){
                this.employee = new TitleComponent();
            }
        }
        create(){
            return this.employee
        }
    }
    class InputComponentFactory{ }
    class CheckboxComponentFactory{ }
    class TitleComponentFactory{ }
    class InputComponent{
        render(){
            return`<input type="text" />`
        }
    }
    class CheckboxComponent{
        render(){
            return`<input type="checkbox" />`
        }
    }
    class TitleComponent{
        set props(value){
            this._props = value.text;
        }
        get props(){
            return this._props;
        }
        render(){
            return`<h1>${this.props}<h1/>`
        }
    }
    return {
        Factory, 
        AbstractFactoryContainer,
        InputComponentFactory,
        InputComponent,
        CheckboxComponentFactory,
        CheckboxComponent,
        TitleComponentFactory,
        TitleComponent
    }
}