import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import Card from "../Components/ComponentsProject/Card"
import HeadProject from "../Components/ComponentsProject/HeadProject"
import Transition from "../Components/GsapTransition/Transition";

const Project = () => {
  const [showComponent, setShowComponent] = useState(false);
  const project = gsap.timeline();
  const projectLogo = useRef(null);
  
  useEffect(() => {
    project.from(
      projectLogo.current,
      {
        duration: 1.5,
        skewX: 0,
        x: -200,
        opacity: 0,
      },
      "-=6"
    );
    project.eventCallback("onComplete", () => {
      setShowComponent(true);
    });
  }, [project]);
  return (
    <>
        <Transition timeline={project} onComplete={() => setShowComponent(true)} />
      {showComponent && (
    <div className="text-white px-2 lg:px-32 py-10" ref={projectLogo}>
        <HeadProject/>
      <Card/>
    </div>
    )}
    </>
  )
}

export default Project