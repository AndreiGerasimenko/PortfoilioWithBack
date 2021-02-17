import React from "react";
import { Typography, Space, Button } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
import { ToolBox } from "../../components";
import "./portfolioItem.css";

export default ({ projectInfo }) => {
  const isDiapazon = useMediaQuery({ minWidth: 576, maxWidth: 1000 });
  return (
    <div className="project-container">
      <div className="project-content">
        <div className="project-info-overlay">
          <Typography.Title
            level={2}
            style={{ color: "#fff", textAlign: "center" }}
          >
            {projectInfo.title}
          </Typography.Title>
          <div className="toolBox-container">
            {projectInfo.technologies.map((item) => (
              <ToolBox textSize={isDiapazon ? "15px" : null}>{item}</ToolBox>
            ))}
          </div>
          <Space
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button size={isDiapazon ? "small" : "middle"}>Check it out</Button>
            <Button
              icon={<GithubOutlined />}
              size={isDiapazon ? "small" : "middle"}
            >
              Code
            </Button>
          </Space>
        </div>
      </div>
    </div>
  );
};
