import {Row,Col,Checkbox,Card} from "antd";
import React from 'react';
import ReactDom from 'react-dom';
import "antd/lib/card/style";
import "antd/lib/row/style";
import "antd/lib/col/style";
import "antd/lib/checkbox/style";
//无 状态组件，也叫函数式组件
export default props =>                                       
            (<Card  style={{width:300}}>
                  <Row>
                     <Col span={2}>
                        {(props.id)}<Checkbox checked={props.todo.completed} 
                        onChange={e=>props.onChange(props.todo.key,e.target.checked)}/>
                     </Col>
                     <Col span={22}>
                         {props.todo.title}
                     </Col>
                 </Row>
            </Card>)
            
        