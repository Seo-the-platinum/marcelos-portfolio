import React from 'react'
import { FaInstagram, FaTiktok, FaEnvelope } from "react-icons/fa";
import './navbar.css'

const SocialMediaLinks = () => {
  return (
    <div className='socialMediaLinksContainer'>
        <a href='https://www.tiktok.com/@marcelo_flores_vo?lang=en'>
            <FaTiktok className='mediaIcon' id={'tiktok'}/>
        </a>
        <a href='https://www.instagram.com/marchelloflores/'>
            <FaInstagram className='mediaIcon' id={'instagram'}/>
        </a>
        <a href='mailto:Marceloflores0701@gmail.com'>
            <FaEnvelope className='mediaIcon' id={'email'}/>
        </a>
    </div>
  )
}

export default SocialMediaLinks