import React from "react";
import Card from "../Components/ComponentsProject/Card"
import HeadProject from "../Components/ComponentsProject/HeadProject"

const Project = () => {
  return (
    <>
    <div className="text-white px-2 lg:px-32 py-10" >
      <HeadProject/>
      <Card/>
    </div>
    </>
  )
}

export default Project