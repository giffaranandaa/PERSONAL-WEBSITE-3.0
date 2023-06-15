import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {CgMenuLeft} from 'react-icons/cg'
import {BiX} from 'react-icons/bi'

export const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [open,setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open)
  }

  const closeMenu = () => {
    setOpen(true);
  };

  useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const navbarDiv = document.querySelector('.large-2');
      if (navbarDiv) {
        const isOverflowed =
          navbarDiv.scrollHeight > navbarDiv.clientHeight &&
          navbarDiv.scrollTop > 0;
        setIsScrolled(isOverflowed);
      }
    };

    const navbarDiv = document.querySelector('.large-2');
    if (navbarDiv) {
      navbarDiv.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (navbarDiv) {
        navbarDiv.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <>
      <div
        className={`text-white w-[94%] lg:w-[91%] fixed z-[40] ${
          isScrolled ? 'hidden' : 'bg-transparent'
        }`}
      >
        <div className="relative md:hidden text-[40px]">
          <button className="absolute z-[50] left-0 top-1 -rotate-90" onClick={toggleMenu}>
            {open ?(
              <CgMenuLeft/>
            ) : (
              <BiX className="text-black"/>
            )}
          </button>
        </div>
        <ul className="flex items-center md:justify-center mt-10 md:mt-1">
          <div className={`flex flex-col md:flex-row gap-5 bg-white absolute top-0 pt-12 md:pt-0 px-3 md:px-0 h-[85vh] md:h-0 w-[105%] md:static md:w-auto lg:ml-28 ${open? "top-[4000px]" : "text-black md:text-white "}`}> 
            <NavLink 
              onClick={() => {
                closeMenu();
              }} 
              to="/" 
              className="md:text-[20px] text-[30px] relative nav">
              HOME
            </NavLink>
            <NavLink 
              onClick={() => {
                closeMenu();
              }}
              to="/about"
              className={`md:text-[20px] text-[30px] relative nav ${
                location.pathname === '/about' ? 'line-through' : ''
              }`}
            >
              ABOUT
            </NavLink>
            <NavLink
              onClick={() => {
                closeMenu();
              }} 
              to="/project"
              className={`md:text-[20px] text-[30px] relative nav ${
                location.pathname === '/project' ? 'line-through' : ''
              }`}
            >
              PROJECT
            </NavLink>
            <NavLink
              onClick={() => {
                closeMenu();
              }} 
              to="/contact"
              className={`md:text-[20px] text-[30px] relative nav ${
                location.pathname === '/contact' ? 'line-through' : ''
              }`}
            >
              CONTACT
            </NavLink>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
