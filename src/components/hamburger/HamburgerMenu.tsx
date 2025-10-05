import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Hamburger.css'
interface toggle {
    toggle: ()=> void;
}
const HamburgerMenu = ({toggle}: toggle) => {
  return (
    <div className='hamburgerMenu'>
        <AnchorLink className='tab' onClick={toggle} href='#home'>Home</AnchorLink>
        <AnchorLink className='tab' onClick={toggle} href='#about'>About</AnchorLink>
        <AnchorLink className='tab' onClick={toggle} href='#projects'>Projects</AnchorLink>
        <AnchorLink className='tab' onClick={toggle} href='#work-studio'>Work Studio</AnchorLink>
        <AnchorLink className='tab' onClick={toggle} href='#testimonials'>Testimonials</AnchorLink>
        <AnchorLink className='tab' onClick={toggle} href='#contact'>Contact</AnchorLink>
    </div>
  )
}

export default HamburgerMenu