import React from 'react'

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
    <div>
        <audio onPlay={handlePausePlay} controls src='sounds/demoSound_1.mp3'/>
        <audio onPlay={handlePausePlay} controls src='sounds/demoSound_2.mp3'/>
    </div>
  )
}

export default Demo