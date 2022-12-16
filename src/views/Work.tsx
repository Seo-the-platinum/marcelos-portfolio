import React from 'react'
import { experience } from '../utils/experience'
import Entry from '../components/entry/Entry'

const Work= () => {
  return (
    <div className='workContainer' id='work'>
        <h3>Work History</h3>
        {experience.map(exp=> { 
            return <Entry key={exp.title} {...exp}/>
        })}
    </div>
  )
}

export default Work