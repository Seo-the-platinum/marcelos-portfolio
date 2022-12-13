import React, { useState } from 'react'
import { FaRegPauseCircle, FaRegPlayCircle } from "react-icons/fa"

interface DemoProps {
    id: string;
    playing: boolean;
    source: string;
    title: string;
    handlePausePlay: (id: string)=> void;
}

const Demo = ({id, playing, source, title, handlePausePlay}: DemoProps) => {
    const audioEl = document.querySelector('audio')
    const handleClick = (e: React.MouseEvent) => {
        // handlePausePlay(id)
        if (playing) {
            audioEl?.pause()
        } else {
            console.log('playing')
            audioEl?.play()
        }
    }
    console.log(source)
  return (
    <div className='audioContainer'>
        <h3>{title}</h3>
        <div className="audio">
            <button className='play/pause' onClick={handleClick}>
                {!playing ? <FaRegPlayCircle/> : <FaRegPauseCircle/>}
            </button>
            <audio src={source}/>
        </div>
    </div>
  )
}

export default Demo