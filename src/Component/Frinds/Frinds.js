import React from 'react'
import {useNavigate} from 'react-router-dom'

function Frinds(props) {
    const {id,name,email}=props.user
    const navigate = useNavigate()
    function showDeltis(){
      const path=`/Frinds/${id}`
      navigate(path)
    }
    return (
        <div className='border py-2 px-2 bg-purple-500 text-white w-[400px] px-7'>
           <h1>Name:{name}</h1>
           <h1>Gmail:{email}</h1> 
           <button onClick={showDeltis} className='border px-1 hover:bg-slate-400'>FrindDelits</button>
        </div>
    )
}

export default Frinds
