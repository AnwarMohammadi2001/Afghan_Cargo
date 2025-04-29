import React from "react";
import "./ReadMoreBtn.css";
const ReadMoreBtn = ({ onClick, label = "Read More" }) => {
  return (
    <button
      onClick={onClick}
      className="readmore-btn"
    >
      {label}
    </button>
  );
};

export default ReadMoreBtn;
