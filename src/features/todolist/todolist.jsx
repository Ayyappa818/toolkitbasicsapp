import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {addTodo} from './todolistSlice'
 function Todolist(){
    var {todos}= useSelector(state=>state.todoReducer)
    var [newtodo,setNewtodo]=useState('')
    var dispatch = useDispatch();
    console.log(todos)
    return (
    <div className="border border-2 border-primary m-2 p-2">
        <h1>Todolist</h1>
        <input type="text" class="form-control" onChange={(e)=>{setNewtodo(e.target.value)}} placeholder="ADD TODO"/>
        <button  className="btn btn-warning" onClick={()=>{dispatch(addTodo(newtodo))}}>ADD TODO</button>
        {
            todos?.map((t)=>{
                return <li>{t}</li>
            })
        }
    </div>
    )
 }
 export default Todolist