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
        <div className="border border-2 border-dark m-2 p-2" style={{backgroundColor:'lightskyblue'}}>
            <h1>Countries</h1>
            {isLoading && (<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
  <span role="status">Loading...</span>
</button>)}
            <ul className="d-flex flex-wrap">
            {isLoading===false && (
                countries?.map((c)=>{
                    return <div className=" w-25 p-5 border border-2 border-secondary m-1 p-1"  style={{backgroundColor:"whitesmoke"}}>    
                        <li>
                            <b>COUNTRY NAME:{c.name.common}</b>
                            <img src={c.flags[0]} alt="" width="200px" />
                            <b>CAPITAL:{c.capital}</b><br />
                            <b><i>POPULATION:{c.population}</i></b>
                        </li>
                    </div>
                })
            )}
            </ul>
        </div>
    )
}
export default Countries