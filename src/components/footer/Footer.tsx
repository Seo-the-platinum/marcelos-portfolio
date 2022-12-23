import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footerContainer' id='contact'>
        <p>Marceloflores0701@gmail.com</p>
        <a href='https://www.facebook.com/marcelo.m.flores.3'>
            <FaFacebookF className='footerMedia'/>
        </a>
        <a href='https://www.instagram.com/marchelloflores/'>
            <FaInstagram className='footerMedia'/>
        </a>
    </div>
  )
}

export default Footer