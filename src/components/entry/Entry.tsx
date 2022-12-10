import React from 'react'
import './Entry.css'

interface EntryProps {
    title: string;
    link: string;
    role: string;
    type: string;
}
const WorkEntry = ({title, link, role, type}: EntryProps) => {
  return (
    <div className='entryContainer'>
      <h3>{`Project: ${title}`}</h3>
        {
            type === 'image' ? <img src={link} style={{maxWidth: '100%'}}/> :
            <iframe
                src={link}
                title={title} 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>
        }
        <h3>{`Role: ${role}`}</h3>
    </div>
  )
}

export default WorkEntry