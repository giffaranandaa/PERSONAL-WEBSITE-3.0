import React from 'react'

const TechStack = () => {
  return (
    <div className="text-white mb-5 flex flex-col items-center justify-center">
        <h1 className="text-xl mt-2 font-semibold">Tech Stack :</h1>
        <div className="mt-5 flex gap-10 text-zinc-300 px-2 text-[13px] md:text-[16px]"> 
          <div>
            <li>Ms Windows</li>
            <li>Linux</li>
          </div>
          <div>
            <li>HTML</li>
            <li>CSS</li>
          </div>
          <div>
            <li>JavaScript</li>
            <li>PHP</li>
          </div>
        </div>
    </div>
  )
}

export default TechStack