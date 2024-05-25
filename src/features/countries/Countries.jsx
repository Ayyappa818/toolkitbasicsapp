import React, { useEffect } from "react";
import { useGetAllCountriesQuery } from "../../services/countriesApi";
import { useDispatch, useSelector } from "react-redux";
import { updateCountries} from './countriesSlice'

function Countries(){
    var {isLoading,data}=useGetAllCountriesQuery();
    var countries = useSelector(state=>state.countriesReducer.countries)
    var dispatch =useDispatch()
    useEffect(()=>{
        if(isLoading===false){
            dispatch(updateCountries(data))
        }
    },[isLoading])
    console.log(countries)
    return (
        <div className="border border-2 border-dark m-2 p-2">
            <h1>Countries</h1>
            {isLoading && (<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
  <span role="status">Loading...</span>
</button>)}
            <ul>
            {isLoading===false && (
                countries?.map((c)=>{
                    return <div>    
                        <li>{c.name.common}</li>
                        <img src={c.flags[0]} alt="" width="200px" />
                    </div>
                })
            )}
            </ul>
        </div>
    )
}
export default Countries