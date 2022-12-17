import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll-v2'

interface show {
    show: boolean;
}
const HamburgerMenu = () => {
  return (
    <div className='hamburgerMenu'>
        <AnchorLink className='tab' href='#home'>Home</AnchorLink>
        <AnchorLink className='tab' href='#about'>About</AnchorLink>
        <AnchorLink className='tab' href='#contact'>Contact</AnchorLink>
        <AnchorLink className='tab' href='#work'>Work</AnchorLink>
    </div>
  )
}

export default HamburgerMenu