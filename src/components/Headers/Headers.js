import React from "react";
import { Link } from "@reach/router";
import { Layout, Menu } from "antd";

const { Header } = Layout;

function Headers() {
  return (
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="home-page">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="canvas">
          <Link to="/canvas">Canvas</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
}

export default Headers;
