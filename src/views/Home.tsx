import React from 'react'
import Skills from '../components/Skills'
import Profile from '../components/profile/Profile'
import Work from '../components/Work'
import './css/views.css'

const Home = () => {
  return (
    <div className='homeContainer'>
      <Profile/>
      <Work/>
    </div>
  )
}

export default Home