import React, { useEffect, useState } from "react";

const Home = () => {
  const [text, setText] = useState("Giffar Ananda Maulana - Front End Developer -");

  useEffect(() => {
    if (typeof text === "string") {
      setText(
        text
          .split("")
          .map((char, i) => (
            <span key={i} style={{ transform: `rotate(${i * 8}deg)` }}>
              {char}
            </span>
          ))
      );
    }
  }, [text]);

  return (
      <div className="relative h-[200px] w-[200px] rounded-full flex justify-center items-center">
        <div className="logo absolute w-[210px] h-[210px] rounded-full"></div>
          <div className="text absolute text-white w-[140%] h-[140%]">
          <p>{text}</p>
        </div>
      </div>
  );
};

export default Home;
