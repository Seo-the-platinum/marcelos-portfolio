import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll-v2'
import './navbar.css'

const Tabs = () => {
    //e is our parameter. React.SyntheticEvent describes the shape of what we expect the
    //parameter to look like. Because we are passing an event, we expect any arguments to be
    //syntheticEvent
    const handleNav = (e:React.SyntheticEvent) => {
      e.preventDefault()
      //based on notes i've read on stackoverflow , when we click a button,
      //the e.target can be an element, document, and window.
      if (!(e.target instanceof HTMLButtonElement)) {
        return 
      }
      //not sure why dataset is undefined but to fix error we use a conditional statement
      //so that when it is undefined, use a string in its place
        const path : string = e.target.dataset.route ? e.target.dataset.route : '/'
        
        location.href=`${path}`
    }
  return (
    <div className='tabsContainer'>
        <AnchorLink className='tab' href='#home'>Home</AnchorLink>
        <AnchorLink className='tab' href='#about'>About</AnchorLink>
        <AnchorLink className='tab' href='#contact'>Contact</AnchorLink>
        <AnchorLink className='tab' href='#work'>Work</AnchorLink>
    </div>
  )
}

export default Tabs