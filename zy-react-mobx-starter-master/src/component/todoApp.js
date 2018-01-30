import React from 'react';
import Creat from "./create";
import TodoService from "../service/service"
import Todo  from "./todo"
import Filter  from "./filter"

export default class Root extends React.Component{
    constructor(props){   //固定用法
        super(props)    //固定用法
        this.service = new TodoService("completed")
        this.a =1
    }

    handlerCheckedChange(key,e){
    //   console.log(key);
    //   console.log(e);
      this.service.setTodoState(key,e)
      this.touchstate()
    }

    touchstate(){
        this.setState({b:64})
        this.a =1
    }

    handleCreate(event){
        // console.log(event);
        // console.log(this);
        this.service.create(event.target.value)
        // this.setState({a:64}) //只要有值就表示动过了。会调用render方法
        // this.a =1
        this.touchstate()
    }
    
    handlerselectChange(value){
        // alert("过滤"+value)
        this.service.typeFilter(value)
        // this.service.create(value)
        // this.setState({a:64}) //只要有值就表示动过了。会调用render方法
        // this.a =1
        this.touchstate()
    }
    render(){
        return (
        <div> 
            <Creat onCreate={this.handleCreate.bind(this)}/>
            <Filter onselectchange={this.handlerselectChange.bind(this)}/>
            {   
                [...(this.service.todos.values())].map(item =>  
                    <Todo id ={this.a} key={this.a++} todo ={item} 
                    onChange={this.handlerCheckedChange.bind(this)}/> )
                //循环后的react元素需要有key 属性确保不重复，而key在react类里面是无法调用的，说明了他仅仅为了确定唯一
            }
        </div>);
    }  
}
