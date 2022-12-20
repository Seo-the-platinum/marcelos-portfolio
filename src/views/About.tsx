import React from 'react'
import './css/views.css'

const About = () => {
  return (
    <div className='aboutContainer' id='about'>
      <h3>About Myself</h3>
      <img className='aboutImg' src='/images/Headshot_4.jpg'/>
      <p className='aboutMessage'>
        {
        `Today's media is all about being natural and authentic.
        So it's important to be the most true version of yourself when connecting with viewers.
        Viewers will feel those genuine emotions in everything Marcelo performs, 
        whether it's a solemn internal monologue read for a PSA, or a playful and innocent character for a kids show,
        or a fierce and righteous warrior defying all odds to save his true love. 
        Marcelo dedicates each performance to discovering more about himself and how he can best portray his role for the world to watch.`}</p>
    </div>
  )
}

export default About