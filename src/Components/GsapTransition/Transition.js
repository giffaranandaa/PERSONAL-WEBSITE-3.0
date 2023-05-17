import React, {useRef, useEffect} from 'react'
import {Quint} from 'gsap'
import '../GsapTransition/style/transStyle.css'

const Transition = ({timeline,onComplete}) => {
    const trans = useRef(null)
  useEffect(() => {
    timeline.to(trans.current,{
        duration: 6,
        x: 3600,
        ease: Quint,
        onComplate: onComplete
    })
  }, [timeline, onComplete])
  return (
    <div className="transition-effect" ref={trans}></div>
  )
}

export default Transition