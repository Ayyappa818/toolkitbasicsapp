import { createSlice } from '@reduxjs/toolkit'
const initialState={
    count:0
}
export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        inc:(state,action)=>{
            state.count++;
        },
        dec:(state,action)=>{
            state.count--;
        },
        reset:(state,action)=>{
            state.count=0;
        },
    }
})
export var {inc,dec,reset}= counterSlice.actions;
export default counterSlice.reducer