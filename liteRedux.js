function module(){
    class Store {
        constructor(obj){
            this.store = obj;
            this.toDoList = {todos: ``, projects: ``};
        }
        dispatch(obj){
            if(obj.action === `ADD_TODO`){
                if(this.toDoList.todos !== ``) this.toDoList.todos.push(obj.payload);
                else this.toDoList.todos = this.store[obj.action]({payload: obj.payload}, {todos: false}).todos;
            }
            if(obj.action === `ADD_PROJECT`) this.toDoList.projects = this.store[obj.action]({payload: obj.payload}, {projects: false}).projects;
        }
        getState(){
            return JSON.parse(JSON.stringify(this.toDoList));
        }
    }
    return {
        Store
    }
}