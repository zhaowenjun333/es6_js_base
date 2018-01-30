import {Input,Card} from "antd";
import React from 'react';
import ReactDom from 'react-dom';
import "antd/lib/card/style";
import "antd/lib/input/style";
 
 
// export default  class Creat extends React.Component{
//     render(){
//         return (
//             <Card title="please input keywords">
//                 <Input placeholder="请输入" onPressEnter={props.onCreate}/>
//             </Card>
//         );
//     }
// }
//无 状态组件，也叫函数式组件  onPressEnter 是api提供的事件
export default props =>                                       
            (<Card title="please input keywords" style={{width:300}}>
            <Input placeholder="请输入" onPressEnter={props.onCreate}/>   
            </Card>)
            
         