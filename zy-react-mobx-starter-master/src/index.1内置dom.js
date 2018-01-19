import React from 'react';
import ReactDom from 'react-dom'

class SubElement extends React.Component{
  render(){
  return (<div>myfirsttest
    
  </div>);
  }  
}

class Root extends React.Component{
  render(){
  return (<div>good
    <SubElement />
  </div>);
  }  
}
ReactDom.render(<Root />,document.getElementById("root"));