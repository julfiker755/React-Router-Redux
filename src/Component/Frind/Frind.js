import React, { useEffect, useState } from 'react'
import Frinds from '../Frinds/Frinds'

function Frind() {
    const [friend,setfriend]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>setfriend(data))
    },[])

    return (
        <div className='flex flex-wrap'>
           {friend.map(data=><Frinds user={data}></Frinds>)}
        </div>
    )
}

export default Frind
