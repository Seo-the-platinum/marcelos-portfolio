import React, { useEffect, useState } from 'react'

const ResizeHook = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(()=> {
    const handleResize = ()=> {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return ()=> window.removeEventListener('resize', handleResize)
  },[])
  return windowWidth
}

export default ResizeHook