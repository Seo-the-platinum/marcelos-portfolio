import React, { useContext } from 'react'
import Switch from 'react-switch'
import { GlobalContext } from '../../App'
import Tabs from './Tabs'
import './navbar.css'

const Navbar = () => {
  //need to fix these errors
    const {theme, toggleTheme}  = useContext(GlobalContext)
  return (
    <div className='navbarContainer'>
        <Switch 
          checked={theme === 'dark'}
          checkedIcon={false}
          onChange={toggleTheme}
          uncheckedIcon={false}
          />
          <Tabs/>
    </div>
  )
}

export default Navbar