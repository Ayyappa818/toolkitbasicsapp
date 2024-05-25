import { createSlice } from '@reduxjs/toolkit'
const initialState={
    countries:[]
}
export const countriesSlice = createSlice({
    name:'countries',
    initialState,
    reducers:{
        updateCountries:(state,action)=>{
            state.countries=action.payload
        },
    }
})
export var {updateCountries}= countriesSlice.actions;
export default countriesSlice.reducer