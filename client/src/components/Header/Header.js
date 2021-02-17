import React, { useState, useCallback } from "react";
import { useMediaQuery } from "react-responsive";
import Nav from "../Nav/Nav";
import "./header.css";

import { Layout, Drawer, Avatar } from "antd";
import { MenuOutlined } from "@ant-design/icons";

export default () => {
  const [sideMenuShown, setShowMenu] = useState(false);

  const onChangeScreen = () => {
    setShowMenu(false);
  };

  const isSmScreenSize = useMediaQuery(
    { maxWidth: 635 },
    undefined,
    onChangeScreen
  );

  const onCloseDrawer = useCallback(() => setShowMenu(false), [setShowMenu]);
  const openMenu = () => setShowMenu(true);

  return (
    <Layout.Header className="page-header">
      <div>
        <Avatar size={60}>AH</Avatar>
        <span className="owner-title">Andrii Herasimenko</span>
      </div>

      {isSmScreenSize ? (
        <MenuOutlined className="menu-toggle-icon" onClick={openMenu} />
      ) : (
        <Nav orientation="horizontal" onCloseDrawer={onCloseDrawer} />
      )}

      <Drawer
        placement="right"
        closable={false}
        onClose={onCloseDrawer}
        visible={sideMenuShown}
        width={200}
      >
        <Nav orientation="vertical" onCloseDrawer={onCloseDrawer} />
      </Drawer>
    </Layout.Header>
  );
};
