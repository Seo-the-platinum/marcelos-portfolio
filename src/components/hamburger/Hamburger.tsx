import React, { useEffect, useRef, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import HamburgerMenu from './HamburgerMenu'
import './Hamburger.css'

const Hamburger = () => {
    const [ show, setShow ] = useState(false)
    //tell typescript what to expect, in this case we are using a ref
    //to point to a div, therefor we expect an htmlDivElement. Pass null so when the component
    //initiallizes, it is not undefined but is null. Cannot be undefined
    const ref = useRef<HTMLDivElement>(null)

    useEffect(()=> {
      const clickedOutside = (e: MouseEvent) => {
        //comeback and write notes on this code, specifically as Node part
        if (show && ref.current && !ref.current.contains(e.target as Node)) {
          setShow(false)
        }
      }
      document.addEventListener('mousedown', clickedOutside)
      return ()=> document.removeEventListener('mousedown', clickedOutside)
    },[show])
    const toggleMenu = () => {
        setShow(prev=> !prev)
    }
  return (
    <div className={!show ? 'hamburgerContainer': 'hamburgerContainer showHamburgerContainer'} ref={ref}>
        <button className='hamburgerButton' onClick={toggleMenu}>
            <GiHamburgerMenu className='hamburger'/>
        </button>
        <HamburgerMenu toggle={toggleMenu}/>
    </div>
  )
}

export default Hamburger