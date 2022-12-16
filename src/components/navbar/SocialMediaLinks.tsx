import React, { useContext } from 'react'
import { GlobalContext } from '../../App'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa';
import './navbar.css'

const SocialMediaLinks = () => {
    const context = useContext(GlobalContext)
  return (
    <div className='socialMediaLinksContainer'>
        <a href='https://www.facebook.com/marcelo.m.flores.3'>
            <FaFacebookF className='mediaIcon'/>
        </a>
        <a href='https://www.instagram.com/marchelloflores/'>
            <FaInstagram className='mediaIcon'/>
        </a>
        <p className='email'>Marceloflores0701@gmail.com</p>
    </div>
  )
}

export default SocialMediaLinks