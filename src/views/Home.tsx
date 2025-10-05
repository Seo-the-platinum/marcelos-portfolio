import Profile from '../components/profile/Profile'
import Demo from '../components/demos/Demos'
import ResizeHook from '../utils/ResizeHook'
import './css/views.css'

const Home = () => {
 
  const windowWidth = ResizeHook()
  return (
    <div 
      className='homeContainer flex flex-col gap-8' 
      id='home'>
      <Profile/>
      <div className="flex flex-col gap-4 md:grid grid-cols-2 gap-4">
        <img className='h-full w-full aspect-video' src='/images/Headshot_4.jpg'/>
        <Demo/>
      </div>
    </div>
  )
}

export default Home