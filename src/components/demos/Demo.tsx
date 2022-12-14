import React, { MouseEventHandler, useEffect, useState } from 'react'
import { FaRegPauseCircle, FaRegPlayCircle } from "react-icons/fa"
import Slider from './Slider'
interface DemoProps {
    handlePausePlay: (id: string)=> void;
    id: string;
    pause: (id: string)=> void;
    play: (id: string)=> void;
    playing: boolean;
    source: HTMLAudioElement;
    title: string;
}

const Demo = ({id, pause, play, playing, source, title, handlePausePlay}: DemoProps) => {
    const [ percentage, setPercentage ] = useState(0)

    const handleTracking = (e: React.SyntheticEvent) => {
        const secs = Math.floor(e.timeStamp / 1000)
        const duration = Math.floor((e.target as HTMLAudioElement).duration)
        setPercentage((secs / duration) * 100)
    }
    source.addEventListener('timeupdate', handleTracking)

    const onChange = (e: React.SyntheticEvent) => {
        const value = Math.round(Number((e.target as HTMLInputElement).value))
        setPercentage(value)
        source.currentTime = (source.duration / 100) * Number((e.target as HTMLInputElement).value)
        console.log(percentage)
    }
    const togglePlay = (e: React.SyntheticEvent) => {
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
                <button className='play/pause' onClick={togglePlay}>
                    {!playing ? <FaRegPlayCircle/>: <FaRegPauseCircle/>}
                </button>
            }
            <Slider percentage={percentage} onChange={onChange}/>
        </div>
    </div>
  )
}

export default Demo