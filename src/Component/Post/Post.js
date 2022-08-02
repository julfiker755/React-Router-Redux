import React, { useEffect, useState } from 'react'
import { Link,Outlet } from 'react-router-dom'

function Post() {
    const [post,setpost]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(data=>setpost(data))
    },[])
    return (
        <div>
            <h1>Hello Post</h1>
            {post.map(data=><Link className='border' key={data.id} to={`${data.id}`}>{data.id}</Link>)}
            <Outlet />
        </div>
    )
}

export default Post
