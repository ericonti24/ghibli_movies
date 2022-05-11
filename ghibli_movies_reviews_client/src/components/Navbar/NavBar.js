import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const NavBar = () => {
	return (
		<div className='nav-container'>
      <NavLink className="nav-link" to="/">
        <div>Home</div>
      </NavLink> 
      <NavLink className="nav-link" to="/movies">
        <div>Movies</div>
      </NavLink>
		</div>
			
	)
}

export default NavBar