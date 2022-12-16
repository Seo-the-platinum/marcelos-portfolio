import React, { useContext } from 'react'
import Switch from 'react-switch'
import { GlobalContext } from '../../App'
import Tabs from './Tabs'
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
          <Tabs/>
    </div>
  )
}

export default Navbar