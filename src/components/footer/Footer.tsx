import { FaTiktok, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex justify-end gap-4 bg-white text-black p-4' id='contact'>
        <p className="text-black text-md md:text-lg">Marceloflores0701@gmail.com</p>
        <a href='https://www.tiktok.com/@marcelo_flores_vo?lang=en'>
            <FaTiktok className='text-black size-8'/>
        </a>
        <a href='https://www.instagram.com/marchelloflores/'>
            <FaInstagram className='text-black size-8'/>
        </a>
    </div>
  )
}

export default Footer