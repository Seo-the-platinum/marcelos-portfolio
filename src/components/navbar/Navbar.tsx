import React, { useContext } from 'react'
import { GlobalContext } from '../../App'
import Switch from 'react-switch'
import SocialMediaLinks from './SocialMediaLinks'
import Tabs from './Tabs'
import Hamburger from '../hamburger/Hamburger'
import './navbar.css'

const Navbar = () => {
  //need to fix these errors
  const context = useContext(GlobalContext)
  return (
    <div className='navbarContainer'>
        <Switch 
          checked={context?.theme === 'dark'}
          checkedIcon={false}
          onChange={context?.toggleTheme}
          uncheckedIcon={false}
          />
          <Hamburger/>
          <SocialMediaLinks/>
          <Tabs/>
    </div>
  )
}

export default Navbar