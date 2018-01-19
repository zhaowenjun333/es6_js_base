import React from 'react';
import ReactDom from 'react-dom'

class Toggle extends React.Component{
  state ={flag:true}

  handlerClick(event){
    alert(event)
    console.log(event.target.id)
    console.log(event.targe===this)
    console.log(this.setState)
    this.setState({flag:!this.state.flag})
  }

  render(){
    let text = this.state.flag?"true":"false";
    return (<div id="t1" onClick={this.handlerClick.bind(this)}>{this.props.schoolName}点击这句话，会触发一个事件{text}
  </div>);
  }  
}

class Root extends React.Component{
  state ={
    p1:'beijing',
    p2:'welcomeyou'
  };
 
  render(){
    setTimeout(()=>this.setState({p1:'guangzhou'}),1000);
    // this.state.p1='shagnhai';
    return (<div>{this.state.p1}{this.state.p2}
      <Toggle schoolName="beida"/>
    </div>);
  }  
}
ReactDom.render(<Root />,document.getElementById("root"));