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
        {
          projectInfo.video && 
          <video width="100%" height="100%" autoPlay loop >
            <source src={projectInfo.video} type="video/mp4"/>
            There could be a video
          </video>
        }
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
            <Button 
              size={isDiapazon ? "small" : "middle"}
              type='link'
              href={projectInfo.projectLink}
              target="_blank"
              style={{ color: 'white', border: '1px solid white'}}
            >
              Check it out
            </Button>
            <Button
              icon={<GithubOutlined />}
              type='link'
              href={projectInfo.codeLink}
              target="_blank"
              size={isDiapazon ? "small" : "middle"}
              style={{ color: 'white', border: '1px solid white'}}
            >
              Code
            </Button>
          </Space>
        </div>
      </div>
    </div>
  );
};
