import React,{useRef, useEffect} from 'react';
import { List, Input, Checkbox  } from 'antd';

export default function TodoList(props){
    
        // console.log("todoList.js");
        const {data} = props;

        return (
            <div id="todo-list">
                <List
                    bordered
                    dataSource={data}
                    renderItem={item =><SingleList {...props} item={item} key={item.id} />}
                /> 
            </div>
        );
    
}

function SingleList(props){
    // console.log("singleList.js");

    let {data,setData,editIndex,setIndex,item} = props;
    const {id,text,done} = item;
    
    const inputEl = useRef(null);
   
    const changeTodo=(id,valname,val)=>{
        return data.map(item=>{
            if(item.id === id){
                item[valname] = val;
            }
            return item;
            
        });
    }

    /* 改变某个todo的状态，是否完成 */
    const changeStatus=(id,status)=>{
        let data = changeTodo(id,'done',status);
        setData(data);
    }

    /* 改变某个todo的内容 */
    const changeText=(id,text)=>{
        let data = changeTodo(id,'text',text);
        setData(data); 
        setIndex(-1);// -1,没有todo需要编辑
    }

    useEffect(()=>{
        if(editIndex === id){
            
            inputEl.current.input.focus();
        }   
    })
       
    return (
        /* todo默认样式，done是否完成，editing是否处于可编辑状态 */
        <li 
            className={["todo", done ?"done":'', editIndex===id?"editing":''].join(" ")}
            onDoubleClick={()=>{
                if(!done){
                    setIndex(id);
                }
                return false;
            }}
        >
            {/* 展示列 包含checkbox,文本,删除单项图标 */}
            <div className="display">
                <Checkbox 
                    className="check" 
                    type="checkbox" 
                    checked={done} 
                    onChange={(e)=>{
                        changeStatus(id,e.target.checked)
                    }}                  
                />
                <span 
                    className="todo-content"             
                >{text}</span>
                <span 
                    className="todo-destroy"
                    onClick={()=>{
                        // 需注意，优先级："!"(14) > "==="(9)
                        data = data.filter(item=>!(item.id===id));                            
                        setData(data);
                    }}  
                ></span>
            </div>

            <div className="edit"> 
                {/* input需要加key，否则与text不同步，数据不准确 */}                
                <Input  
                    ref={inputEl}
                    size="large"
                    className="todo-input" 
                    type="text" 
                    key={id}
                    defaultValue={text} 

                    onBlur={(e)=>{
                        e.target.value = text;
                        setIndex(-1); 
                    }} 
                    onPressEnter={(e)=>{
                        e.target.onBlur = null;
                        let val = e.target.value.trim();
                        if(val){
                            changeText(id,val)
                        }else{
                            changeText(id,text)
                        }                                    
                    }}         
                />

            </div>
        </li>
    );
    
}



