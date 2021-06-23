import { Breadcrumb, Layout, Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import {
  AreaChartOutlined,
  CompassOutlined,
  IdcardOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
function Sidebar() {
  const [collapse, setCollapse] = useState(false);

  const { Sider } = Layout;
  return (
    <Sider collapsible collapsed={collapse} onCollapse={setCollapse}>
      <Menu defaultSelectedKeys={["Dashboard"]} theme="dark">
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
