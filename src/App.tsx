import React from 'react'
import Home from './views/Home'
import About from './views/About'
import Work from './views/Work'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import './App.css'

const App = ()=> {

  return (
    <div className="App">
      <Navbar/>
      <div className="topContainer">
        <Home/>
        <About/>
      </div>
      <Work/>
      <Footer/>
    </div>
  )
}

export default App
