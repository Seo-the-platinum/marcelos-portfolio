import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll-v2'

interface toggle {
    toggle: ()=> void;
}
const HamburgerMenu = ({toggle}: toggle) => {
  return (
    <div className='hamburgerMenu'>
        <AnchorLink className='tab' onClick={toggle} href='#home'>Home</AnchorLink>
        <AnchorLink className='tab' onClick={toggle} href='#about'>About</AnchorLink>
        <AnchorLink className='tab' onClick={toggle} href='#contact'>Contact</AnchorLink>
        <AnchorLink className='tab' onClick={toggle} href='#work'>Work</AnchorLink>
    </div>
  )
}

export default HamburgerMenu