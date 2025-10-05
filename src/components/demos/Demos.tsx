import { useState } from 'react'
import { demoData } from '../../utils/demos'
import Demo from './Demo'
import './Demo.css'

interface demo {
  id: string;
  duration: number;
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
    <div className='demosContainer flex flex-col gap-16 justify-center'>
      <h3 className="text-2xl font-semibold">Los Angeles based with a passion for weight lifting, cats, and being a proud Registered Nurse.</h3>
      <div className="flex flex-col gap-16">
        {demos.map(demo=> {
          return <Demo {...demo} key={demo.id} handlePausePlay={handlePausePlay}/>
        })}
      </div>
    </div>
  )
}

export default Demos