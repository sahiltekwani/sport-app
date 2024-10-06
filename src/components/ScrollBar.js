import React from "react";
import "./ScrollBar.css";

const ScrollBar = ({ matches, scrollPosition }) => {


  return (
    <div
      className="scroll-bar"
      style={{
        height: `100%`,
        transform: `translateY(${scrollPosition}px)`,
      }}
    ></div>
  );
};

export default ScrollBar;
