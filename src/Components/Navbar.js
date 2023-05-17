import React, { useRef,useState, useEffect } from "react";
import gsap from "gsap";
import { CgMenuLeft, CgClose } from "react-icons/cg";
import { NavLink, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);  

  const toggleMenu = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  return (
    <>
      <div className="text-white w-[90%] lg:w-[89%]  fixed z-[40] bg-black h-[7%] md:h-auto bg-opacity-10 backdrop-blur-[5px]">
        <div
          className={`md:flex items-center justify-between md:justify-center py-1 px-7 ${
            open ? "bg-white" : "bg-transparent"
          }`}
       >
          <div className="font-bold text-xl cursor-pointer flex md:hidden items-center py-2 text-white md:mb-0">
            <span
              className={`text-[15px] ${
                open ? "text-black" : "text-white hidden"
              }`}
            >
              Giffar Ananda Maulana
            </span>
          </div>
          <div
            onClick={toggleMenu}
            className="absolute right-0 top-2 text-white text-[35px] cursor-pointer md:hidden"
          >
            {open ? (
              <CgClose className="text-black" />
            ) : (
              <CgMenuLeft className="-rotate-90" />
            )}
          </div>
          <ul 
            className={`md:flex md:items-center absolute md:static md:z-auto z-[-1] left-0 border-none w-full md:w-auto pl-7 md:pl-0 transition-all duration-300 ease-linear ${
              open
                ? "top-8 bg-white h-screen text-black"
                : "bg-transparent text-white bottom-[4000px]"
            } md:opacity-100`}
          >
            <div className="flex flex-col md:flex-row py-5 md:py-0 md:gap-5 mt-5 md:mt-0">
              <NavLink
                to="/"
                className="text-[20px] relative mb-5 md:mb-0 nav"
                onClick={closeMenu}
              >
                HOME
              </NavLink>
              <NavLink
                to="/about"
                className={`text-[20px] relative mb-5 md:mb-0 nav ${
                  location.pathname === "/about" ? "line-through" : ""
                }`}
                onClick={closeMenu}
              >
                ABOUT
              </NavLink>
              <NavLink
                to="/project"
                className={`text-[20px] relative mb-5 md:mb-0 nav ${
                  location.pathname === "/project" ? "line-through" : ""
                }`}
                onClick={closeMenu}
              >
                PROJECT
              </NavLink>
              <NavLink
                to="/contact"
                className={`text-[20px] relative mb-5 md:mb-0 nav ${
                  location.pathname === "/contact" ? "line-through" : ""
                }`}
                onClick={closeMenu}
              >
                CONTACT
              </NavLink>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
