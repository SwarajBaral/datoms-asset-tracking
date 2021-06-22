import React, { useState } from "react";
import Button from "antd/es/button";
import "./App.css";
import { Breadcrumb, Layout, Menu } from "antd";
import Title from "antd/lib/typography/Title";
import Avatar from "antd/lib/avatar/avatar";
import { UserOutlined } from "@ant-design/icons";
// import  from "antd/lib/menu/Menu";
import SubMenu from "antd/lib/menu/SubMenu";
import DashBoard from "./Components/Dashboard/DashBoard";

function App() {
  const [collapse, setCollapse] = useState(false);

  const { Header, Footer, Sider, Content } = Layout;
  return (
    <div className="App">
      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Title style={{ color: "white", paddingTop: "8px" }} level={3}>
            ASSET TRACKING
          </Title>
          <img src="./datoms.svg" alt="logo" width="200px" />
          {/* <Avatar size={32}  style={{ borderRadius: "0" }} /> */}
        </Header>
      </Layout>
      <Layout>
        <Sider collapsible collapsed={collapse} onCollapse={setCollapse}>
          <Menu defaultSelectedKeys={["Dashboard"]}>
            <Menu.Item key="Dashboard">Dashboard</Menu.Item>
            <SubMenu
              icon={<UserOutlined />}
              title={
                <span>
                  <span>Clients</span>
                </span>
              }
            >
              <Menu.ItemGroup key="Clients" title="Clients">
                <Menu.Item key="Client1">Client 1</Menu.Item>
                <Menu.Item key="Client2">Client 2</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ padding: "0 50px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">Content</div>
          </Content>
          <Footer style={{ textAlign: "center" }}>Asset Tracking ©2021</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
