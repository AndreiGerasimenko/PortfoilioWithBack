import React from "react";
import { Button, Space, Typography } from "antd";
import { scrollFunction } from "../../functions/scrollFunct";

import "./greetingPage.css";

export default () => {
  return (
    <div className="greetingPage-container" id="home">
      <div className="button-group-container">
        <Typography.Title level={1}>Front-end dev</Typography.Title>
        <Space>
          <Button
            type="primary"
            size="large"
            className="greetings-button my-work-button"
            onClick={() => scrollFunction({ key: "portfolio" })}
          >
            my works
          </Button>
          <Button
            size="large"
            className="greetings-button hire-button"
            onClick={() => scrollFunction({ key: "contact" })}
          >
            hire me
          </Button>
        </Space>
      </div>
    </div>
  );
};
