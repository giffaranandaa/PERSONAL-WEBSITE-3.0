import React from "react";
import { NavLink } from "react-router-dom";
import DataProject from "../ComponentsProject/DataProject";
import { AiOutlineFolder, AiFillGithub } from "react-icons/ai";

const Card = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
      {DataProject.map((element) => {
        return (
          <div key={element.key} className="mb-5">
            <div className="border-2 p-6 hover:-translate-y-2 hover:transition hover:duration-300 hover:ease-in ">
              <div className="flex items-center justify-between mb-8">
                <AiOutlineFolder className="text-[30px]" />
                <NavLink
                  to={element.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub className="text-[25px] hover:text-gray-400" />
                </NavLink>
              </div>
              <h1 className="mb-2 text-[20px] font-semibold">{element.name}</h1>
              <div className="h-[100px] mb-5">
                <p className="text-[14px]">{element.description}</p>
              </div>
              <span className="text-[13px] text-gray-300">{element.tech}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
