import React from "react"
import {Select,Card,Row,Col} from "antd"
import "antd/lib/select/style";

const Option = Select.Option
export default props => (
    <Card style={{width:300}}>
        <Select defaultValue="完成" onChange={(e)=>{props.onselectchange(e)}}>
            <Option value="all">所有</Option>
            <Option value="completed">完成</Option>
            <Option value="uncompleted">未完成</Option>
        </Select>
    </Card>
)