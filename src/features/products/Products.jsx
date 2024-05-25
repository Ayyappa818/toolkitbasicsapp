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
        <div className="border border-2 border-warning m-2 p-2">
            <h1>Products</h1>
            <button onClick={()=>{getProducts()}}>Load Our Products</button>
            {isLoading && (<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
  <span role="status">Loading...</span>
</button>)}
            <ul>
            {isLoading===false && (
                data.map((p)=>{
                    return <div>
                        <li>{p.title}</li>
                        <img src={p.image} alt="" width="200px" />
                        <li><h4>Price:{p.price}</h4></li>
                    </div>
                })
            )}
            </ul>
        </div>
    )
}
export default Products