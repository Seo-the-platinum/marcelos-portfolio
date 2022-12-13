import React, { useEffect, useState } from 'react'
import { demoData } from '../../utils/demos'
import Demo from './Demo'
import './Demo.css'

interface demo {
  id: string;
  playing: boolean;
  source: string;
  title: string;
}

const Demos = () => {
  const [ demos, setDemos ] = useState(demoData)
   const handlePausePlay = (id: string)=>{
    const updatedDemos = demos.map(demo=> {
      if (demo.id === id) {
        if (demo.playing === true) {
          demo.playing = false
        } else {
          demo.playing = true
          }
        } else {
          demo.playing = false
        }
      return demo
    })
    setDemos([...updatedDemos])
   }
  return (
    <div className='demosContainer'>
      {demos.map(demo=> {
        return <Demo {...demo} key={demo.id} handlePausePlay={handlePausePlay}/>
      })}
    </div>
  )
}

export default Demos