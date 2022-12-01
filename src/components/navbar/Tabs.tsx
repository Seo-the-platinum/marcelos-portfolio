import React from 'react'
import { useNavigate } from 'react-router-dom'
import './navbar.css'

const Tabs = () => {
    const navigate = useNavigate()
    //fix this error too
    const handleNav = (e) => {
        navigate(e.target.dataset.route)
    }
  return (
    <div className='tabsContainer'>
        <button className='tab' data-route='/' onClick={handleNav}>Home</button>
        <button className='tab' data-route='/about' onClick={handleNav}>About</button>
        <button className='tab' data-route='/contact' onClick={handleNav}>Contact</button>
    </div>
  )
}

export default Tabs