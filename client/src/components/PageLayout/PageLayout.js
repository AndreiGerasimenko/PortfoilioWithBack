import React from "react";
import "./pageLayout.css";
import { Typography } from "antd";

export default ({ children, title, styles, titleColor, id }) => {
  return (
    <div
      className="layout-wrapper"
      style={{
        ...styles,
        backgroundColor: styles?.backgroundColor ?? "#f5f4f4",
      }}
      id={id}
    >
      <Typography.Title
        level={2}
        className="layout-title"
        style={{ color: titleColor }}
      >
        {title}
      </Typography.Title>
      {children}
    </div>
  );
};
