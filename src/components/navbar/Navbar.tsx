import React from 'react'
import SocialMediaLinks from './SocialMediaLinks'
import Tabs from './Tabs'
import Hamburger from '../hamburger/Hamburger'
import './navbar.css'

const Navbar = () => {
  const viewportWidth = window.innerWidth
  return (
    <div className='navbarContainer'>
      <Hamburger/>
        <SocialMediaLinks/>
        {viewportWidth > 768 && <Tabs/>}
    </div>
  )
}

export default Navbar