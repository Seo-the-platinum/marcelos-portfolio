import React, { useEffect, useState } from 'react'

interface sliderProps {
    onChange: (e:React.ChangeEvent) => void;
    percentage: number;
}
const Slider = ({onChange, percentage}: sliderProps) => {
    const [ position, setPosition ] = useState(0)

    useEffect(()=> {
        setPosition(percentage)
    },[percentage])

  return (
    <div className='sliderContainer'>
        <input className='trackSlider' value={percentage} onChange={onChange} type='range' step='.01'/>
    </div>
  )
}

export default Slider