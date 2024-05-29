import React, { useLayoutEffect, useState } from "react";
import { useGetAllProductsQuery, useLazyGetAllProductsQuery } from "../../services/ProductsApi";

function Products(){
    // var {isLoading,data}=useGetAllProductsQuery();
    // console.log("ISLoading",isLoading)
    // console.log("data::",data)
    var [isLoading,setIsLoading]=useState(true);
    var [data,setDate]=useState({})
    var [getAllProdfn]=useLazyGetAllProductsQuery();
    function getProducts(){
        getAllProdfn().then((res)=>{
            setIsLoading(false)
            setDate(res.data)
        })
    }
    return (
        <div className="border border-2 border-warning m-2 p-2" style={{backgroundColor:"orange"}}>
            <h1>Products</h1>
            <button onClick={()=>{getProducts()}}>Load Our Products</button>
            {isLoading && (<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
  <span role="status">Loading...</span>
</button>)}
            <ul className="d-flex flex-wrap">
            {isLoading===false && (
                data.map((p)=>{
                    return <div className="border border-2 border-secondary p-2 m-2" style={{backgroundColor:"white"}}>
                        <li className=" p-5 d-flex flex-column justify-content-between">
                        <p>{p.title}</p>
                        <img src={p.image} alt="" width="200px" />
                        <i><h4>Price:{p.price}</h4></i>
                        </li>
                    </div>
                })
            )}
            </ul>
        </div>
    )
}
export default Products