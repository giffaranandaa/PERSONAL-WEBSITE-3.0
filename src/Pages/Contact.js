import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import HeadContact from '../Components/ComponentsContact/HeadContact'
import HireMe from '../Components/ComponentsContact/HireMe'
import Transition from "../Components/GsapTransition/Transition";

const Contact = () => {
  const [showComponent, setShowComponent] = useState(false);
  const contact = gsap.timeline();
  const contactLogo = useRef(null);
  
  useEffect(() => {
    contact.from(
      contactLogo.current,
      {
        duration: 1.5,
        skewX: 0,
        x: -100,
        opacity: 0,
      },
      "-=6"
    );
    contact.eventCallback("onComplete", () => {
      setShowComponent(true);
    });
  }, [contact]);
  return (
    <>
    <Transition timeline={contact} onComplete={() => setShowComponent(true)} />
      {showComponent && (
    <div className="px-2 lg:px-32 py-16 h-[100%] flex flex-col items-center justify-center" ref={contactLogo}>
      <HeadContact/>
      <HireMe/>
    </div>
     )}
    </>
  )
}

export default Contact