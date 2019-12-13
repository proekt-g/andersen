function module(){
    class Decorator{}
    function LoggingDecorator(func){
        return (...args) => {
            const result = func(Number(args));
            if(this.func !== undefined){
                    this.func({
                    args: args,
                    result: result 
                });
            }
            return result;
        }
    }
    function registerLogger(func){
        this.func = func;
    }
   
    return {
        LoggingDecorator,
        Decorator,
        registerLogger
    }
}