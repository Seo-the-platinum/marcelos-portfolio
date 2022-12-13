import React, { MouseEventHandler, useEffect, useState } from 'react'
import { FaRegPauseCircle, FaRegPlayCircle } from "react-icons/fa"

interface DemoProps {
    handlePausePlay: (id: string)=> void;
    id: string;
    pause: (id: string)=> void;
    play: (id: string)=> void;
    playing: boolean;
    source: string;
    title: string;
}

const Demo = ({id, pause, play, playing, source, title, handlePausePlay}: DemoProps) => {
    const togglePlay = (e: MouseEventHandler) => {
        handlePausePlay(id)
    }
    useEffect(()=> {
        playing ? play(id) : pause(id)
    },[playing])

  return (
    <div className='audioContainer'>
        <h3>{title}</h3>
        <div className="audio">
            {
                !playing ? <button className='play' onClick={togglePlay}><FaRegPlayCircle/></button>:
                <button className='pause' onClick={togglePlay}><FaRegPauseCircle/></button>
            }
            <audio src={source}/>
        </div>
    </div>
  )
}

export default Demo