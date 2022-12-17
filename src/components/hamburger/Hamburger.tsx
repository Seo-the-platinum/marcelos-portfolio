import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import HamburgerMenu from './HamburgerMenu'
import './Hamburger.css'

const Hamburger = () => {
    const [ show, setShow ] = useState(false)
    const toggleMenu = () => {
        setShow(prev=> !prev)
    }
  return (
    <div className={!show ? 'hamburgerContainer': 'hamburgerContainer showHamburgerContainer'}>
        <button className='hamburgerButton' onClick={toggleMenu}>
            <GiHamburgerMenu className='hamburger'/>
        </button>
        <HamburgerMenu/>
    </div>
  )
}

export default Hamburger