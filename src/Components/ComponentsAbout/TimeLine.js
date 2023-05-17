import React from 'react'
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import timelineElements from "../ComponentsAbout/TimelineElements";
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../ComponentsAbout/style/timeline.css";

const TimeLine = () => {
    return (
          <VerticalTimeline className="mb-10">
            {timelineElements.map((element) => {
              return (
                <VerticalTimelineElement
                  key={element.key}
                  date={element.date}
                  dateclassName="date-spacing"
                  icon={
                    element.icon === "graduation" ? (
                      <FaGraduationCap />
                    ) : (
                      <MdOutlineWorkspacePremium />
                    )
                  }
                >
                  <h3 className="text-[20px] font-bold">
                    {element.title}
                  </h3>
                  <p className="text-justify"  style={{ fontSize: '13px' }}>{element.description}</p>
                  <button className="border-2 px-2 mt-5 hover:bg-white text-[13px] hover:text-black hover:transition hover:duration-200 hover:ease-in">
                    {element.buttonText}
                  </button>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
      );
};

export default TimeLine;
