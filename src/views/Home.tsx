import React, { useEffect, useState } from 'react'
import Profile from '../components/profile/Profile'
import Demo from '../components/demos/Demos'
import ResizeHook from '../utils/ResizeHook'
import './css/views.css'

const Home = () => {
 
  const windowWidth = ResizeHook()
  return (
    <div 
      className='homeContainer' 
      id='home' 
      style={{backgroundImage: windowWidth > 479 && windowWidth < 769 ? 'url(/images/Headshot_4.jpg)': 'none'}}>
      <Profile/>
      {windowWidth > 769 && <img className='headshot' src='/images/Headshot_4.jpg'/>}
      <Demo/>
    </div>
  )
}

export default Home