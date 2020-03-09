import React,{useEffect} from 'react';
import { Input } from 'antd';

export default function CreateTodo(props){
   
    const {data,setData} = props;

    /* 在每次更新完成后，获取DOM节点，置空input内容 */
    useEffect(()=>{
        let ipt = document.querySelector('#create-todo input');
        ipt && (ipt.value = "")    
    })
    // console.log('createtodo.js');
    
    return (
        <div id="create-todo">
            <Input
                size="large" 
                type="text" 
                defaultValue=""
                placeholder="What needs to be done?" 
                autoComplete="off"
                onPressEnter={(e)=>{
                    
                    if(e.target.value !== ''){
                        // 添加一项todo
                        data.unshift({
                            id: Date.now(),
                            text:e.target.value,
                            done:false
                        })

                        setData([...data]);

                        /* antd的Input组件，e.target.value可以获取，但不能赋值 = ""无效，暂时不知道原因 */
                        // e.target.value = "";
                    }
                }}
                
            />
        </div>
    );
    
}