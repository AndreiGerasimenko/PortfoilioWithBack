import React from "react";
import "./toolBox.css";

export default ({ children, textSize }) => {
  return (
    <div className="tool-box" style={textSize ? { fontSize: textSize } : null}>
      {children}
    </div>
  );
};
