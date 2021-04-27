import React from "react";
import { Row, Col } from "antd";
import { PortfolioItem } from "../../components";
import { projects } from "../../projects";

import "./portfolioComponent.css";

export default () => {
  return (
    <Row
      gutter={[0, 16]}
      className="portfolio-top-margin"
      justify="space-around"
    >
      {projects.map(item => {
        return (
          <Col
            key={item.id}
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
