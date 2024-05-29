import React, { useEffect } from "react";
import {useFormik} from 'formik'
import { useAddPostMutation,useUpdatePostMutation } from "../../services/postsAPI";
import { useLocation, useNavigate } from "react-router-dom";
function Editpost(){
    var {state}=useLocation()
    useEffect(()=>{
        editpostForm.setValues(state)
    },[state])
    var navigate = useNavigate()
    var [ updatepostfn]=useUpdatePostMutation()
    var editpostForm = useFormik({
        initialValues:{
            title:'',
            author:'',
            id:''
        },
        onSubmit:(values)=>{
            updatepostfn(values).then((res)=>{
                navigate("/posts")
            })
        }
    })
    return (
        <div className="border border-5 border-dark p-2 m-2 bg-warning">
            <h1>Editpost</h1>
            <form onSubmit={editpostForm.handleSubmit}>
                <input type="text" placeholder="Title" {...editpostForm.getFieldProps('title')} />
                <br />
                <input type="text" placeholder="Author" {...editpostForm.getFieldProps('author')} />
                <br /><br />
                <button className="btn btn-2 btn-primary">Update Post</button>
            </form>
        </div>
    )
}
export default Editpost