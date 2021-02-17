import React from "react";
import { useHttp } from "../../hooks/http.hook";
import "./aboutMe.css";
import { Row, Col, Button } from "antd";

import aboutMessage from "../../assets/about-me.jpg";

export default () => {
  const { request } = useHttp();

  const onDownloadHandler = async () => {
    try {
      await request("/download-cv");
    } catch (e) {}
  };

  return (
    <div className="about-me-container">
      <Row gutter={{ sm: 16, md: 24, lg: 40 }} justify="center">
        <Col lg={12} md={20} sm={20} xs={22}>
          <div className="about-me-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <Button className="download-button" onClick={onDownloadHandler}>
            download my cv
          </Button>
        </Col>
        <Col lg={12} md={0} sm={0} xs={0}>
          <img src={aboutMessage} alt="Fancy thing here :)" width="100%" />
        </Col>
      </Row>
    </div>
  );
};
