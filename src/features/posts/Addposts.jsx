import React from "react";
import {useFormik} from 'formik'
import { useAddPostMutation } from "../../services/postsAPI";
function Addpost(){
    var [ addpostfn]=useAddPostMutation()
    var postForm = useFormik({
        initialValues:{
            title:'',
            author:''
        },
        onSubmit:(values)=>{
            addpostfn(values).then((res)=>{
                console.log(res)
            }).catch()
        }
    })
    return (
        <div>
            <h1>Addpost</h1>
            <form onSubmit={postForm.handleSubmit}>
                <input type="text" placeholder="Title" {...postForm.getFieldProps('title')} />
                <br />
                <input type="text" placeholder="Author" {...postForm.getFieldProps('author')} />
                <br /><br />
                <button>Add Post</button>
            </form>
        </div>
    )
}
export default Addpost