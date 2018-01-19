import React from 'react';
import ReactDom from 'react-dom'

class SubElement extends React.Component{
  render(){
  return (<div>myfirsttest
    
  </div>);
  }  
}

class Root extends React.Component{
  state ={
    p1:'beijing',
    p2:'welcome'
  };
 
  render(){
    setTimeout(()=>this.setState({p1:'guangzhou'}),1000);
    // this.state.p1='shagnhai';
    return (<div>{this.state.p1}
      <SubElement />
    </div>);
  }  
}
ReactDom.render(<Root />,document.getElementById("root"));