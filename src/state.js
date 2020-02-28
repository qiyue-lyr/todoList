import React from 'react';

export default function TodoList(props){
    const {data} = props;

    let todo = data.filter((item)=>!item.done).length
    let completed = data.filter((item)=>item.done).length

    
    return (
        <div id="todo-stats">
            <span className="todo-count">
                <span className="number">{todo}</span>
                <span className="word">项待完成</span>
                
            </span> 
            <CompletedShow completed={completed} {...props}/>
                
        </div>
    );
    
}

/* 当已完成事项为0时，不显示 */
function CompletedShow(props){
    
    let {completed,data,setData} = props;
    if(completed){
        return (
            <span className="todo-clear">
                <a href="javascript:;"
                onClick={()=>{
                    data = data.filter(item=>!item.done);
                    setData(data)
                }}
                >
                    Clear <span>{completed}</span> 已完成事项
                </a>
            </span>
        )
    }
    return ''
}


