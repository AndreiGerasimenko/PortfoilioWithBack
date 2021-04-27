import React from "react";
import "./aboutMe.css";
import { Row, Col, Button } from "antd";

import aboutMessage from "../../assets/about-me.jpg";

export default () => {

  return (
    <div className="about-me-container">
      <Row gutter={{ sm: 16, md: 24, lg: 40 }} justify="center">
        <Col lg={12} md={20} sm={20} xs={22}>
          <div className="about-me-text">
            Welcome to my portfolio site. I`m Front-end developer Andrew. I constantly develop my skills in creating new projects using modern technologies. I think the best way to prove abilities is to demonstrate complete projects. So, down below you can check out the results of my work.
          </div>
          <a href='/public/Front-End-Developer-CV.rtf' download>
            <Button className="download-button">
              download my cv
            </Button>
          </a>
        </Col>
        <Col lg={12} md={0} sm={0} xs={0}>
          <img src={aboutMessage} alt="Fancy thing here :)" width="100%" />
        </Col>
      </Row>
    </div>
  );
};
