import React from 'react'
import Profile from '../components/profile/Profile'
import Demo from '../components/demos/Demos'
import './css/views.css'

const Home = () => {
  return (
    <div className='homeContainer' id='home' style={{backgroundImage: 'url(images/Headshot_4.jpg)'}}>
      <Profile/>
      <Demo/>
    </div>
  )
}

export default Home