import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { inc,dec,reset} from './counterSlice'
function Counter(){
    var {count} =useSelector(state=>state.counterReducer)
    console.log(count)
    var dispatch =useDispatch();

    return (
        <div className="border border-2 border-secondary m-2 p-2" style={{backgroundColor:'darkseagreen'}}>
            <h1>Counter:{count}</h1>
            <button  className="btn btn-danger" onClick={()=>{dispatch(inc())}}>Increment</button> 
            <button className="btn btn-success" onClick={()=>{dispatch(dec())}}>Decrement</button>
            <button className="btn btn-warning" onClick={()=>{dispatch(reset())}}>Reset</button>
        
        </div>
    )
}
export default Counter