import React, { useEffect, useState } from 'react'
import {useParams,useNavigate} from 'react-router-dom'

function FriendDel() {
    const { userID } = useParams()
    let navigate = useNavigate();
    function handledel(){
        const path=`/Frind/`
        navigate(path)
    }
    const [Frinds,setFriend]=useState([])
    useEffect(()=>{
    const url=`https://jsonplaceholder.typicode.com/users/${userID}`
     fetch(url)
     .then(res=>res.json())
     .then(data=>setFriend(data)) 
    },[])
    return (
        <div className='border border-[red]'>
            <h1>Name:{Frinds.name}</h1>
            <h1>Email Id:{Frinds.email}</h1>
            <h1>bs:{Frinds.company?.bs}</h1>
            <button className='border py-2 px-1' onClick={handledel}>Frinds</button>
        </div>
    )
}

export default FriendDel
