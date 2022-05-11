import React from 'react'
import logo from '../../assets/logo.png'
import NavBar from '../Navbar/NavBar'
import './Banner.css'

const Banner = () => {
	return (
		<div className='banner-container'>
			<NavBar/>
			<img className='logo' src={logo} alt="logo"></img>
		</div>
	)
}

export default Banner