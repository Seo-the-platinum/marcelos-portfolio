import React from 'react'
import { skills } from '../utils/skills'
import './css/components.css'

const Skills = () => {
  return (
    <div className='skillsContainer'>
        <h3>Skills</h3>
        <ul>
            {skills.map((skill, index) => <li key={index}>{skill}</li>)}
        </ul>
    </div>
  )
}

export default Skills