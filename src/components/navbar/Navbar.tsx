import React from 'react'
import SocialMediaLinks from './SocialMediaLinks'
import Tabs from './Tabs'
import Hamburger from '../hamburger/Hamburger'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbarContainer'>
      <Hamburger/>
        <SocialMediaLinks/>
        {/* Show when we hide hamburger for larger viewports <Tabs/> */}
    </div>
  )
}

export default Navbar