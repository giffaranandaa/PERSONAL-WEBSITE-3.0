import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import Logo from "../Components/ComponentsHome/Logo";
import Transition from "../Components/GsapTransition/Transition";

const Home = () => {
  const [showComponent, setShowComponent] = useState(false);
  const home = gsap.timeline();
  const homeLogo = useRef(null);
  useEffect(() => {
    home.from(
      homeLogo.current,
      {
        duration: 1,
        skewX: 0,
        x: -100,
        opacity: 0,
      },
      "-=6"
    );

    home.eventCallback("onComplete", () => {
      setShowComponent(true);
    });
  }, [home]);
  return (
    <>
      <Transition timeline={home} onComplete={() => setShowComponent(true)} />
      {showComponent && (
        <div className="flex items-center justify-center h-[100%] relative" ref={homeLogo}>
          <Logo/>
        </div>
      )}
    </>
  );
};

export default Home;
