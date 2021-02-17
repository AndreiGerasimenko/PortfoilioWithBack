import React from "react";
import { Button } from "antd";
import { UpOutlined } from "@ant-design/icons";
import { animateScroll as scroll } from "react-scroll";
import { Scroll } from "react-fns";
import "./scrollTopButton.css";

export default () => {
  return (
    <Scroll
      render={({ y }) => {
        if (y < 50) return null;
        return (
          <>
            <Button
              className="scroll-top-button"
              icon={<UpOutlined className="scroll-icon" />}
              shape="circle"
              onClick={() => {
                scroll.scrollToTop({
                  duration: 800,
                  delay: 0,
                  smooth: "easeInOutQuart",
                });
              }}
            ></Button>
          </>
        );
      }}
    />
  );
};
