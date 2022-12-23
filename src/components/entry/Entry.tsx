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
      <h3>{`Project - ${title}`}</h3>
        {
            type === 'image' ? <img className='entryMedia' src={link}/> :
            <iframe
                className='entryMedia'
                src={link}
                title={title} 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>
        }
        <h3>{`Role - ${role}`}</h3>
    </div>
  )
}

export default WorkEntry