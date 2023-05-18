import React from 'react'
import {AiFillWindows,AiFillHtml5} from 'react-icons/ai'
import {SiLinux,SiTailwindcss,SiBootstrap,SiNodedotjs,SiPhp} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'

const TechStack = () => {
  return (
    <div className="text-white mb-5 flex flex-col items-center justify-center">
        <h1 className="text-xl mt-2 font-semibold">Tech Stack :</h1>
        <div className="mt-3 text-[23px] md:text-[30px] grid grid-cols-8 md:grid-cols-8 gap-4">
            <AiFillWindows/>
            <SiLinux/>
            <AiFillHtml5/>
            <SiTailwindcss/>
            <SiBootstrap/>
            <FaReact/>
            <SiNodedotjs/>
            <SiPhp/>
        </div>
    </div>
  )
}

export default TechStack