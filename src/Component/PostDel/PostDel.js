import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDel = () => {
    const { postid } = useParams()
    const [post,setpost]=useState([])
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/posts/${postid}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setpost(data))
    },[postid])
    return (
        <div>
            <h1>How to someting post deltis={postid}</h1>
            <h1>Your Title:{post.title}</h1>
            <p>Body:{post.body}</p>
        </div>
    );
};

export default PostDel;
