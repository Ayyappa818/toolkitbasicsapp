import React, { useEffect } from "react";
import { useDeletePostMutation, useGetAllPostsQuery, useLazyGetAllPostsQuery } from "../../services/postsAPI";
import { useNavigate } from "react-router-dom";
function Posts(){
    var navigate=useNavigate()
    var {isLoading,data}=useGetAllPostsQuery()
    var[lazyGetAllPostsfn]=useLazyGetAllPostsQuery()
    var [deletepostfn]=useDeletePostMutation()
    function deletePostHandler(id){
        deletepostfn(id).then(()=>{
            lazyGetAllPostsfn()
        })
    }
    function Editpost(post){
        navigate('/editpost',{state:post})
    }
    console.log(isLoading)
    useEffect(()=>{
        lazyGetAllPostsfn()
    },[])
    return (
        <div>
            <h1>Posts</h1>
                {
                    isLoading && (<h4>Loading...</h4>)
                }
                 <ul>
                {
                    !isLoading && (
                        data?.map((p)=>{
                            return <li>
                                {p.title}-{p.author}
                                <button onClick={()=>{deletePostHandler(p.id)}}>Delete</button>
                                <button onClick={()=>{Editpost(p)}}>Edit</button>
                            </li>
                        })
                )
                }
                </ul>
        </div>
    )
}
export default Posts