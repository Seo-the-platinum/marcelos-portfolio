import React from 'react'
import Profile from '../components/profile/Profile'
import Demo from '../components/demos/Demos'
import './css/views.css'

const Home = () => {
  const windowWidth = window.innerWidth
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