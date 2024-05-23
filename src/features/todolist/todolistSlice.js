import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    todos:['get a job','pay hostel fees','goto goa']
}
var todoSlice = createSlice ({
    name:'todolist',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todos.push(action.payload)
        }
    }
})
export  const {addTodo}=todoSlice.actions;
export default todoSlice.reducer;