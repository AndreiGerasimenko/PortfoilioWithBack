import React, { useState, useCallback } from "react";
import { useMediaQuery } from "react-responsive";
import { Layout, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Nav from "../Nav/Nav";
import "./header.css";
import devphoto from "../../assets/devphoto.jpg"


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
      <div className="logo-container">
        <div className="dev-image-container">
          <img 
            src={devphoto} 
            alt="AH" 
            width="70px" />
        </div>
        <span className="owner-title">Andrii Herasymenko</span>
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
