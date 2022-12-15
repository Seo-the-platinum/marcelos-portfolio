import React from 'react'
import Skills from '../components/Skills'
import Profile from '../components/profile/Profile'
import Work from './Work'
import Demo from '../components/demos/Demos'
import AnchorLink from 'react-anchor-link-smooth-scroll-v2'
import './css/views.css'

const Home = () => {
  return (
    <div className='homeContainer'>
      <AnchorLink href='#innerTest'> goToTest</AnchorLink>
      <Profile/>
      <Demo/>
      <div id="test" style={{height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
        heres the test stuff
        <div id='innerTest'>
          heres where we should be
        </div>
      </div>
    </div>
  )
}

export default Home