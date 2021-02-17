import React from "react";
import { Row, Col } from "antd";
import { PortfolioItem } from "../../components";

import "./portfolioComponent.css";

const projectInfo = {
  title: "Sea Battle",
  technologies: [
    "CSS",
    "HTML",
    "ReactJS",
    "Redux",
    "Redux-saga",
    "Redux-thunk",
  ],
  backgroundImage: "",
  codeLink: "",
  projectLink: "",
};

const projectsArray = [projectInfo, projectInfo, projectInfo];

export default () => {
  return (
    <Row
      gutter={[0, 16]}
      className="portfolio-top-margin"
      justify="space-around"
    >
      {projectsArray.map((item, i) => {
        return (
          <Col
            key={i}
            xl={{ span: 6 }}
            md={{ span: 7 }}
            sm={{ span: 10 }}
            xs={{ span: 21 }}
          >
            <PortfolioItem projectInfo={item} />
          </Col>
        );
      })}
    </Row>
  );
};
