import React from 'react'
import { useNavigate } from 'react-router-dom'
import './navbar.css'

const Tabs = () => {
    const navigate = useNavigate()
    //e is our parameter. React.SyntheticEvent describes the shape of what we expect the
    //parameter to look like. Because we are passing an event, we expect any arguments to be
    //syntheticEvent
    const handleNav = (e:React.SyntheticEvent) => {
      //based on notes i've read on stackoverflow , when we click a button,
      //the e.target can be an element, document, and window.
      if (!(e.target instanceof HTMLButtonElement)) {
        return 
      }
      //not sure why dataset is undefined but to fix error we use a conditional statement
      //so that when it is undefined, use a string in its place
        const path : string = e.target.dataset.route ? e.target.dataset.route : '/'
        navigate(path)
    }
  return (
    <div className='tabsContainer'>
        <button className='tab' data-route='/' onClick={handleNav}>Home</button>
        <button className='tab' data-route='/about' onClick={handleNav}>About</button>
        <button className='tab' data-route='/contact' onClick={handleNav}>Contact</button>
        <button className='tab' data-route='/work' onClick={handleNav}>Work</button>
    </div>
  )
}

export default Tabs