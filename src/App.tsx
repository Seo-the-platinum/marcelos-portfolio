import Home from './views/Home'
import About from './views/About'
import HomeStudio from './views/HomeStudio'
import Work from './views/Work'
import Testimonials from './views/Testimonials'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import './App.css'

const App = ()=> {

  return (
    <div className="App">
      <Navbar/>
      <div className="flex flex-col gap-8">
        <Home/>
        <About/>
        <HomeStudio/>
      </div>
      <Work/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App
