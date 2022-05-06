import React from 'react'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
    return (
        <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px', fontSize: 20 }}>
            <NavLink to="/">Home</NavLink> 
            <br></br>
            <NavLink to="/movies">Movies</NavLink>
            
        </div>
        
    )
}

export default NavBar