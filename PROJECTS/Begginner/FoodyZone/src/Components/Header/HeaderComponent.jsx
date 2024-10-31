import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const HeaderComponent = () => {
  return (
    <>
    <div className="TopContainer">
      <div className="logo">
        <img src="/logo.svg" alt="logo" />
      </div>
      <div className="search">
      <input type="text" name="" id="" placeholder='search foood'/>
      </div>
      <div className="nav">
        <nav className='navbar'>
            <ul>
                <li><NavLink to="/Home">Home</NavLink></li>
                <li><NavLink to="/About">About</NavLink></li>
                <li><NavLink to="/Contact">Contact</NavLink></li>
                <li><NavLink to="/Services">Services</NavLink></li>
            </ul>
        </nav>
      </div>
    </div>
  </>

  )
}

export default HeaderComponent

