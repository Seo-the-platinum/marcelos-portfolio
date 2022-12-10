import React from 'react'
import './Demo.css'

const Demo = () => {
   const handlePausePlay = (e: React.ChangeEvent<HTMLAudioElement>)=> {
    const audios = document.getElementsByTagName('audio')
    for (let i = 0; i < audios.length; i++) {
        if (audios[i] !== e.target) {
            audios[i].pause()
        }
    }
   }
  return (
    <div className='demosContainer'>
        <h3>Animation Demo</h3>
        <audio className='audio' onPlay={handlePausePlay} controls src='sounds/demoSound_1.mp3'/>
        <h3>Commercial Demo</h3>
        <audio className='audio' onPlay={handlePausePlay} controls src='sounds/demoSound_2.mp3'/>
    </div>
  )
}

export default Demo