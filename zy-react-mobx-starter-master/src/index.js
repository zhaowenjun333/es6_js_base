import React from 'react';
import ReactDom from 'react-dom';
import Creat from "./Create";
import TodoService from "./service"
class Root extends React.Component{
  constructor(props){
    super(props)
    this.service = new TodoService()
  }

  handleCreate(event){
    console.log(event);
    console.log(this);debugger
    this.service.create(event.target.value)
  }
  render(){
    return (<div> 
      <Creat onCreate={this.handleCreate.bind(this)}/>
    </div>);
  }  
}


ReactDom.render(<Root />,document.getElementById("root"));