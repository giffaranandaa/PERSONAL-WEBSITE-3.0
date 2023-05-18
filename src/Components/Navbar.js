import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

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
        className={`text-white w-[90%] fixed z-[40] ${
          isScrolled ? '-top-14 transition-all ease-in-out duration-500' : 'bg-transparent'
        }`}
      >
        <div>
          
        </div>
        <ul className="flex items-center justify-center">
          <div className="flex flex-row gap-5">
            <NavLink to="/" className="text-[20px] relative nav">
              HOME
            </NavLink>
            <NavLink
              to="/about"
              className={`text-[20px] relative nav ${
                location.pathname === '/about' ? 'line-through' : ''
              }`}
            >
              ABOUT
            </NavLink>
            <NavLink
              to="/project"
              className={`text-[20px] relative nav ${
                location.pathname === '/project' ? 'line-through' : ''
              }`}
            >
              PROJECT
            </NavLink>
            <NavLink
              to="/contact"
              className={`text-[20px] relative nav ${
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
