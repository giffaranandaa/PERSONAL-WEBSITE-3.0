import React from "react";
import "react-vertical-timeline-component/style.min.css";
import "../Components/ComponentsAbout/style/timeline.css";
import Story from "../Components/ComponentsAbout//Story";
import TimeLine from "../Components/ComponentsAbout/TimeLine";
import TechStack from "../Components/ComponentsAbout/TechStack";

function AboutMe() {
  return (
    <>
      <div className="px-2 lg:px-32 py-16">
        <div className="h-[500px] flex flex-col items-center justify-center">
          <Story />
          <TechStack />
        </div>
        <TimeLine />
      </div>
    </>
  );
}

export default AboutMe;
