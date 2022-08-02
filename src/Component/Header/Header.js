import React from 'react'
import {Link} from 'react-router-dom'
import CustomLink from '../CustomLink/CustomLink'

function Header() {
    return (
        <div className='flex justify-center'>
            <CustomLink to="/Home">Home</CustomLink>
            <CustomLink to="/Servies">Servies</CustomLink>
            <CustomLink to="/Frind">Frind</CustomLink>
            <CustomLink to="/Post">Post</CustomLink>
        </div>
    )
}

export default Header
