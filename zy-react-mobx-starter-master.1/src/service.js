import store from "store"
export default class TodoService{
    static NAMESPACE="todo::"//业务区分  prefix + str = key
    todos=[];
    create(title){
        const todo ={
            key :TodoService.NAMESPACE+(new Date()).valueOf() ,
            title:title,
            completed:false
        }
        this.todos.push(todo)   //title key completed
        store.set(todo.key,todo)
        return todo


    }

}