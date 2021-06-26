import { Breadcrumb, Menu, Layout } from "antd";
import { Header } from "antd/lib/layout/layout";
import SubMenu from "antd/lib/menu/SubMenu";
import {
  AreaChartOutlined,
  CompassOutlined,
  IdcardOutlined,
  UserOutlined,
} from "@ant-design/icons";

import Title from "antd/lib/typography/Title";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [collapse, setCollapse] = useState(false);

  const { Sider } = Layout;

  return (
    <Sider
      collapsible
      breakpoint="lg"
      collapsedWidth="0"
      collapsed={collapse}
      onCollapse={setCollapse}
      style={{ baclground: "hsl(310,32%,29%)" }}
      // onBreakpoint={() => setCollapse(true)}
    >
      <div className="logo">
        <img src="./datoms.svg" alt="logo" width="100%" />
      </div>
      {/* <Header
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Title style={{ color: "white", paddingTop: "8px" }} level={3}>
          ASSET TRACKING
        </Title>
      </Header> */}
      <Menu defaultSelectedKeys={["Dashboard"]}>
        <Menu.Item key="Dashboard" icon={<IdcardOutlined />}>
          <Link to="/">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="About" icon={<CompassOutlined />}>
          <Link to="/overview">Overview</Link>
        </Menu.Item>
        <Menu.Item key="Analytics" icon={<AreaChartOutlined />}>
          <Link to="/analytics">Analytics</Link>
        </Menu.Item>
        <SubMenu
          icon={<UserOutlined />}
          key="Clients"
          title={
            <span>
              <span>Clients</span>
            </span>
          }
        >
          <Menu.ItemGroup key="Clients" title="Clients">
            <Menu.Item key="Client1">Client 1</Menu.Item>
            <Menu.Item key="Client2">Client 3</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    </Sider>
  );
}

export default Sidebar;
