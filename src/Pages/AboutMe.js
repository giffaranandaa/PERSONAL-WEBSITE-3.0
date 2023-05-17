import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import "react-vertical-timeline-component/style.min.css";
import "../Components/ComponentsAbout/style/timeline.css";
import Story from "../Components/ComponentsAbout//Story";
import TimeLine from "../Components/ComponentsAbout/TimeLine";
import TechStack from "../Components/ComponentsAbout/TechStack";
import Transition from "../Components/GsapTransition/Transition";

function AboutMe() {
  const [showComponent, setShowComponent] = useState(false);
  const about = gsap.timeline();
  const aboutLogo = useRef(null);
  const headAbout = useRef(null);
  useEffect(() => {
    about.from(
      aboutLogo.current,
      {
        duration: 0.6,
        skewX: 0,
        x: -100,
        opacity: 0,
      },
      "-=3.5"
    );
    about.from(headAbout.current,{
      duration:1.5,
      x:-100,
      opacity:0
  },"-=6" )

    about.eventCallback("onComplete", () => {
      setShowComponent(true);
    });
  }, [about]);
  return (
    <>
      <Transition timeline={about} onComplete={() => setShowComponent(true)} />
      {showComponent && (
        <div className="px-2 lg:px-32 py-16">
          <div className="h-[500px] flex flex-col items-center justify-center" ref={headAbout}>
            <Story />
            <TechStack />
          </div>
          <TimeLine />
        </div>
      )}
    </>
  );
}

export default AboutMe;
