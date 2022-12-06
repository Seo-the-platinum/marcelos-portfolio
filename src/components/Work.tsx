import React from 'react'
import { experience } from '../utils/experience'
import Entry from './WorkEntry'

const Work= () => {
  return (
    <div className='workContainer'>
        <h1>Work History</h1>
        {experience.map(exp=> { 
            return <Entry key={exp.title} {...exp}/>
        })}
    </div>
  )
}

export default Work