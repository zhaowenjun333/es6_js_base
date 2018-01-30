import store from "store"
export default class TodoService{  //没有继承React.Componet 就不用重新加载super（props）
    constructor(props){
        this.option=props;
        this.load();
        
        // alert(this.option)
    }
    static NAMESPACE="todo::"//业务区分  prefix + str = key
    todos=new Map();
    typeFilter(option){
        this.todos=new Map();
        store.each((value,key)=>{
            if(option=="completed" && value.completed==true){
                this.todos.set(key,value)
                this.option="completed"
            }else if(option=="uncompleted" && value.completed==false ){
                this.todos.set(key,value)
                this.option="uncompleted"
            }else if(option=="all" && value!="INFO" ){
                this.todos.set(key,value)
                this.option="all"
            }
        }); 
    }

    setTodoState(key,checked){
        let todo = this.todos.get(key);
        if (todo){
            todo.completed=checked;
            store.set(key,todo)
        }
        this.typeFilter(this.option)
    } 

    load(){
        // store.each((value,key)=>{
        //         if (key.startsWith(TodoService.NAMESPACE) ){
        //             this.todos.set(key,value)
        //             // this.option ="completed"
        //         }
        // });  
        this.typeFilter(this.option)      
    }
  
    // store.each((value,key)=>{
    //     if (key.startWith()){
    //     }
    // });    这种写法是有错误的，必须封装为方法才可以调用
    create(title){
        let todo ={
            key :TodoService.NAMESPACE+(new Date()).valueOf() ,
            title:title,
            completed:false
        }
        this.todos.set(todo.key,todo)   //title key completed
        store.set(todo.key,todo)
        this.typeFilter(this.option)
    }
}