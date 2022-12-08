import React from 'react'
import Skills from '../components/Skills'
import Profile from '../components/profile/Profile'
import Work from './Work'
import Demo from '../components/demos/Demo'
import './css/views.css'

const Home = () => {
  return (
    <div className='homeContainer'>
      <Profile/>
      <Demo/>
    </div>
  )
}

export default Home