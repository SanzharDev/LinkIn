import React from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { useFirebase } from "../../Firebase/useFirebase";

const { Sider } = Layout;
const { SubMenu } = Menu;

function Siders({ createNode }) {
  // const { database } = useFirebase();

  function handleMenuItemClick({ item, key, keyPath, domEvent }) {
    console.log(key);
    createNode();
  }

  function fire() {

  }

  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        onClick={handleMenuItemClick}
        style={{ height: "100%", borderRight: 0 }}
      >
        <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
          <Menu.Item key="createNode">Create Node</Menu.Item>
          <Menu.Item key="2">option2</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
          <Menu.Item key="5">option5</Menu.Item>
          <Menu.Item key="6">option6</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
          <Menu.Item key="9">option9</Menu.Item>
          <Menu.Item key="10">option10</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}

export default Siders;
