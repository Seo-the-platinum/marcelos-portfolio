import { useState, createContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'
import './App.css'
import Navbar from './components/navbar/Navbar'

interface AppContextInterface {
  theme: string;
  toggleTheme: ()=> void;
}
export const GlobalContext = createContext<AppContextInterface | null>(null)
const App = ()=> {
  const [ theme, setTheme ] = useState('light')
  const toggleTheme = ()=> {
    setTheme(curr=> curr === 'dark' ? 'light' : 'dark')
  }
  return (
    <GlobalContext.Provider value={{theme, toggleTheme}}>
      <div className="App" id={theme}>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      </div>
    </GlobalContext.Provider>
  )
}

export default App
