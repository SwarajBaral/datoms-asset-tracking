import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, Menu, Layout } from "antd";
import {
  AreaChartOutlined,
  CompassOutlined,
  IdcardOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";

import logo from "./D.svg";

// import logo from "./D.svg";

function Sidebar() {
  const [collapse, setCollapse] = useState(false);

  const { Sider } = Layout;

  return (
    <Sider
      collapsible
      // breakpoint="lg"
      // collapsedWidth="0"
      collapsed={collapse}
      onCollapse={setCollapse}
      // onBreakpoint={() => setCollapse(true)}
    >
      <div className="logo">
        <img
          src={collapse ? logo : "./datoms.svg"}
          alt="logo"
          width={collapse ? "60%" : "100%"}
        />
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
      <Menu>
        <Menu.Item key="Dashboard" icon={<IdcardOutlined />}>
          <Link to="/">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="About" icon={<CompassOutlined />}>
          <Link to="/analytics">Analytics</Link>
        </Menu.Item>
        {/* <Menu.Item key="About obd" icon={<CompassOutlined />}>
          <Link to="/analytics/obd">Overview2</Link>
        </Menu.Item> */}
        <Menu.Item key="Analytics" icon={<AreaChartOutlined />}>
          <Link to="/graphs">Graphs</Link>
        </Menu.Item>
        <Menu.Item key="Allassets" icon={<UnorderedListOutlined />}>
          <Link to="/all-assets">All assets</Link>
        </Menu.Item>
        {/* <SubMenu
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
        </SubMenu> */}
      </Menu>
    </Sider>
  );
}

export default Sidebar;
