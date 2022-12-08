import React from 'react'
import { experience } from '../utils/experience'
import Entry from '../components/WorkEntry'

const Work= () => {
  return (
    <div className='workContainer'>
        <h3>Work History</h3>
        {experience.map(exp=> { 
            return <Entry key={exp.title} {...exp}/>
        })}
    </div>
  )
}

export default Work