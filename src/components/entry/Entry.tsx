import './Entry.css'

interface EntryProps {
  asset: string;
  title: string;
  link?: string;
  role?: string;
  type: string;
}

const WorkEntry = ({asset, title, link, role, type}: EntryProps) => {
  return (
    <a className={`flex flex-col gap-4 items-center w-full text-white ${!link && 'pointer-events-none'}`} href={link}>
      <h4 className="text-lg">{title}</h4>
      <div className="lg:w-24 rounded-lg overflow-hidden">
        <img className="w-full" src={asset}/>
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
    </a>
  )
}

export default WorkEntry