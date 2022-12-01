import React from 'react'
import Skills from '../components/Skills'
import './css/views.css'

const Home = () => {
  return (
    <div className='homeContainer'>
      <h1>Marcelo Flores</h1>
      <h3>Throat Talent</h3>
      <Skills/>
      <a href='https://www.voices.com/profile/marceloflores#skill=voice-over'>Demos</a>
    </div>
  )
}

export default Home