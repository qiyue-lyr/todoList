import React,{useState, useEffect} from 'react';
import CreateTodo from './createTodo';
import TodoList from './todoList'
import State from './state';
import "./app.css";

export default function App(){
    const storage = window.localStorage; 

    let todos = [];
    // 如果本地存储有，就取出来作为data的初始值
    if(storage.getItem('todos')){
        todos = JSON.parse(storage.getItem('todos')).data;
    }
    
    const [data,setData] = useState(todos);
    const [editIndex,setIndex] = useState(-1);//可编辑的是哪一个todo

    // 每次data更新后存储data到localStorage，注意：第二个参数本身必须是数组
    useEffect(()=>{
        let storage = window.localStorage;
        let todo = {data}
        storage.setItem('todos',JSON.stringify(todo))
    },[data])

    console.log("app.js");
    
  
    return (
        <div id="todolist">
            <h1>todos</h1>
            
            <div className="content">
                <CreateTodo data={data} setData={setData}/>
                {data.length ? <TodoList  
                                data={data} 
                                setData={setData} 
                                editIndex={editIndex} 
                                setIndex={setIndex}/>:''}
                {data.length ? <State data={data} setData={setData}/>:''}
                
            </div>
        </div>
    );
}