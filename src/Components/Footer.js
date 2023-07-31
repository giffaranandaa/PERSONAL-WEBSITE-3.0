import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiGmail, SiInstagram } from "react-icons/si";
import cv from "../assets/CV_ENG_GIFFAR ANANDA MAULANA.pdf";

const Footer = () => {
  const handleClick = () => {
    window.open(cv, "_blank");
  };

  return (
    <>
      <div className="relative">
        <div className="flex gap-5 items-center justify-center w-full py-2 text-white absolute bottom-0">
          <div className=" bg-white h-[2px] w-[90px]"></div>
          <div className="flex gap-3 md:gap-5 text-white text-[20px] md:text-[25px]">
            <a
              href={`https://www.linkedin.com/in/giffaranandaa/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin className="hover:-translate-y-1 hover:transition hover:duration-200 hover:ease-in-out hover:text-gray-400" />
            </a>
            <a
              href={"https://github.com/gipparananda"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub className="hover:-translate-y-1 hover:transition hover:duration-200 hover:ease-in-out hover:text-gray-400" />
            </a>
            <button
              onClick={handleClick}
              className="border px-2 text-[12px] lg:text-[15px] hover:bg-white hover:text-black hover:transition hover:duration-200 hover:ease-in"
            >
              Resume
            </button>
            <SiGmail className="hover:-translate-y-1 hover:transition hover:duration-200 hover:ease-in-out hover:text-gray-400 md:py-1" />
            <SiInstagram className="hover:-translate-y-1 hover:transition hover:duration-200 hover:ease-in-out hover:text-gray-400 md:py-1" />
          </div>
          <div className="bg-white h-[2px] w-[90px]"></div>
        </div>
      </div>
    </>
  );
};

export default Footer;
