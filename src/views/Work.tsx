
import { experience } from '../utils/experience'
import Entry from '../components/entry/Entry'

const Work= () => {
  return (
    <div className='flex flex-col gap-8 bg-[#020272] p-8' id='projects'>
        <h3 className="text-5xl font-semibold">Work History</h3>
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-8">
          {experience.map(exp=> { 
              return <Entry key={exp.title} {...exp}/>
          })}
        </div>
    </div>
  )
}

export default Work