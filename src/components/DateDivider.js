import React from "react";
import "./DateDivider.css";

const DateDivider = ({ date }) => {
  return (
    <div className="date-divider">
      <span>{date}</span>
    </div>
  );
};

export default DateDivider;
