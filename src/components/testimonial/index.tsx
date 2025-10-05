const Testimonial = ({testimonial}: {testimonial: {quote: string, company: string, project: string}}) => {
    const {quote, company, project } = testimonial

  return (
    <div className='flex flex-col gap-4 rounded-lg bg-slate-900 border border-slate-800 p-8 flex-1'>
        <blockquote>"{quote}"</blockquote>
        <p className="italic">-{company}, {project}</p>
    </div>
  )
}

export default Testimonial