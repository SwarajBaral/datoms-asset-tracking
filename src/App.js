import React, { useState } from "react";
import "./App.css";
import { Breadcrumb, Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import SubMenu from "antd/lib/menu/SubMenu";
import DashBoard from "./Components/Dashboard/DashBoard";
import Numbers from "./Components/Dashboard/Numbers";
// import Avatar from "antd/lib/avatar/avatar";
// import  from "antd/lib/menu/Menu";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HeaderLayout from "./Components/Header/HeaderLayout";
import Map from "./Components/Map/Map";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  const [collapse, setCollapse] = useState(false);

  const { Footer, Sider, Content } = Layout;
  return (
    <div className="App">
      <HeaderLayout />
      <Router>
        <Layout>
          <Sidebar />
          {/* <Sider collapsible collapsed={collapse} onCollapse={setCollapse}>
            <Menu defaultSelectedKeys={["Dashboard"]}>
              <Menu.Item key="Dashboard">Dashboard</Menu.Item>
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
          </Sider> */}
          <Layout>
            <Content style={{ padding: "0 50px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              </Breadcrumb>
              <div className="site-layout-content">
                <Switch>
                  <Route path="/" exact component={Map} />
                  <Route path="/overview" exact component={Numbers} />
                </Switch>
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Asset Tracking ©2021
            </Footer>
          </Layout>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
