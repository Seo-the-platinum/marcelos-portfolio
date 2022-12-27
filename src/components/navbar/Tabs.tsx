import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll-v2'
import './navbar.css'

const Tabs = () => {
  return (
    <div className='tabsContainer'>
        <AnchorLink className='tab' href='#home'>Home</AnchorLink>
        <AnchorLink className='tab' href='#about'>About</AnchorLink>
        <AnchorLink className='tab' href='#work'>Work</AnchorLink>
        <AnchorLink className='tab' href='#contact'>Contact</AnchorLink>
    </div>
  )
}

export default Tabs