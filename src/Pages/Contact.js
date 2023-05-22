import React from "react";
import HeadContact from '../Components/ComponentsContact/HeadContact'
import HireMe from '../Components/ComponentsContact/HireMe'

const Contact = () => {
  return (
    <>
    <div className="px-2 lg:px-32 py-16 h-[100%] flex flex-col items-center justify-center">
      <HeadContact/>
      <HireMe/>
    </div>
    </>
  )
}

export default Contact