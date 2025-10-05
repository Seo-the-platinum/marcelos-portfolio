import './Entry.css'

interface EntryProps {
    title: string;
    link: string;
    role?: string;
    type: string;
}
const WorkEntry = ({title, link, role, type}: EntryProps) => {
  return (
    <div className='flex flex-col gap-4 items-center w-full'>
      <h4 className="text-lg">{title}</h4>
      <div className="lg:w-24 rounded-lg overflow-hidden">
        <img className="w-full" src={link}/>
      </div>
        {/* {
            type === 'image' ? <img className='rounded-lg' src={link}/> :
            <iframe
                className='entryMedia aspect-video h-auto'
                src={link}
                title={title} 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>
        } */}
        {role && <h3>{`Role - ${role}`}</h3>}
    </div>
  )
}

export default WorkEntry