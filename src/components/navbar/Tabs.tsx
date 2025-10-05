import AnchorLink from 'react-anchor-link-smooth-scroll';
import './navbar.css'

const Tabs = () => {
  return (
    <div className='tabsContainer'>
        <AnchorLink className='tab' href='#home'>Home</AnchorLink>
        <AnchorLink className='tab' href='#about'>About</AnchorLink>
        <AnchorLink className='tab' href='#projects'>Projects</AnchorLink>
        <AnchorLink className='tab' href='#home-studio'>Home Studio</AnchorLink>
        <AnchorLink className='tab' href='#testimonials'>Testimonials</AnchorLink>
        <AnchorLink className='tab' href='#contact'>Contact</AnchorLink>
    </div>
  )
}

export default Tabs