import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import './Hamburger.css'

const Hamburger = () => {
  return (
    <div className='hamburgerContainer'>
        <GiHamburgerMenu className='hamburger'/>
    </div>
  )
}

export default Hamburger