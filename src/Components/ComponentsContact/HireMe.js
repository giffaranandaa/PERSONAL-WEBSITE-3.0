import React, {useState} from "react";
import{TbHandClick} from 'react-icons/tb'

const HireMe = () => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(true)
    };

    const onLeave = () => {
        setHover(false);
    };

  return (
    <>
    <div className="text-white mb-10 text-center">
      <button className="border-2 text-[20px] px-5 py-1 bg-transparent hover:bg-white hover:text-black hover:transition hover:duration-200 hover:ease-in" onMouseEnter={onHover} onMouseLeave={onLeave}>
        Say Hello
      </button>
        <div className="relative">
            <TbHandClick className={`absolute z-[123] left-[45%] top-5 text-white text-[30px] animate-bounce ${hover? "" : "hidden"}`}/>
        </div>
    </div>
    </>
  );
};

export default HireMe;
