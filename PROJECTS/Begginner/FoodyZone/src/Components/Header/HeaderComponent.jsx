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
      
    </div>
  </>

  )
}

export default HeaderComponent

