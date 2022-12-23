import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa';
import './navbar.css'

const SocialMediaLinks = () => {
  return (
    <div className='socialMediaLinksContainer'>
        <a href='https://www.facebook.com/marcelo.m.flores.3'>
            <FaFacebookF className='mediaIcon' id={'facebook'}/>
        </a>
        <a href='https://www.instagram.com/marchelloflores/'>
            <FaInstagram className='mediaIcon' id={'instagram'}/>
        </a>
        <p className='email'>Marceloflores0701@gmail.com</p>
    </div>
  )
}

export default SocialMediaLinks