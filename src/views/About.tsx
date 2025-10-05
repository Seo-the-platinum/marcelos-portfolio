import ResizeHook from '../utils/ResizeHook'
import './css/views.css'

const About = () => {
  const windowWidth = ResizeHook()
  return (
    <div className='aboutContainer' id='about'>
      <p className='aboutMessage'>
        Marcelo Flores is a Mexican-American voice actor born and raised in Alhambra, CA, and currently lives in LA County.
        His Voiceover journey started when the Covid pandemic turned the world upside down in 2020.
        Back then, he spent nearly all his time working as a Registered Nurse in the hospital, but a fire ignited in his heart to finally pursue voice acting.
        Marcelo has studied with VO coaches Terri Apple, Dan Green, Joe Zieja, and Cristina Milizia throughout his voiceover journey.  He also continues to take several VO classes with Casting Directors, Voice Directors, and other well known voice actors like Shelby Young and Abby Trot.
        During his freetime, Marcelo love's working out, video games, puzzles, and spending high quality time with friends/family. Feel free to email me if you are interested in working on a new project together!
      </p>
    </div>
  )
}

export default About