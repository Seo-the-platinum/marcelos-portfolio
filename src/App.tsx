import React, { useState, createContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'
import Work from './views/Work'
import './App.css'
import Navbar from './components/navbar/Navbar'

interface AppContextInterface {
  theme: string;
  toggleTheme: (e: React.SyntheticEvent<MouseEvent>)=> void;
}
export const GlobalContext = createContext<AppContextInterface | null>(null)
const App = ()=> {
  const [ theme, setTheme ] = useState('light')
  const toggleTheme = (e: React.SyntheticEvent<MouseEvent>)=> {
    setTheme(curr=> curr === 'dark' ? 'light' : 'dark')
  }
  return (
    <GlobalContext.Provider value={{theme, toggleTheme}}>
      <div className="App" id={theme}>
        <Navbar/>
        <Home/>
        <About/>
        <Contact/>
        <Work/>
      </div>
    </GlobalContext.Provider>
  )
}

export default App
