import React from "react";
import { Menu } from "antd";
import { scrollFunction } from "../../functions/scrollFunct";

export default ({ orientation, onCloseDrawer }) => {
  const mode = orientation ?? "horizontal";

  return (
    <Menu
      theme="light"
      mode={mode}
      selectedKeys={["home"]}
      onClick={scrollFunction}
      onSelect={onCloseDrawer}
      style={{
        border: "none",
        textTransform: "uppercase",
      }}
    >
      <Menu.Item key="home">home</Menu.Item>
      <Menu.Item key="about">about</Menu.Item>
      <Menu.Item key="portfolio">portfolio</Menu.Item>
      <Menu.Item key="contact">contact</Menu.Item>
    </Menu>
  );
};
