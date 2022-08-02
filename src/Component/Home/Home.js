import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
           <h1 className='text-[40px] text-[red]'>Hello I am home Component</h1>
           <Link to="/">Home component</Link> 
        </div>
    )
}

export default Home
