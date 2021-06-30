import React, { useState } from "react";
import "./App.css";
import { Breadcrumb, Layout, Menu, Card, Col, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Numbers from "./Components/Dashboard/Numbers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderLayout from "./Components/Header/HeaderLayout";
import Map from "./Components/Map/Map";
import Sidebar from "./Components/Sidebar/Sidebar";
import Analytics from "./Components/Analytics/Analytics";
import InfoCards from "./Components/Dashboard/InfoCards";

function App() {
  const [collapse, setCollapse] = useState(false);
  const { Footer, Sider, Content } = Layout;
  return (
    <div className="App">
      <Router>
        <Switch>
          <Layout>
            <Sidebar />
            <Layout>
              <HeaderLayout />
              <Content style={{ padding: "0 50px", marginTop: "50px" }}>
                <div className="site-card-wrapper">
                  <Route path="/" exact component={InfoCards} />
                </div>
              </Content>
              <Content style={{ padding: "0 50px" }}>
                <Breadcrumb style={{ margin: "16px 0" }}>
                  <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">
                  <Route path="/" exact component={Map} />
                  <Route path="/overview" exact component={Numbers} />
                  <Route path="/analytics" exact component={Analytics} />
                </div>
              </Content>
              <Footer style={{ textAlign: "center" }}>
                Asset Tracking ©2021
              </Footer>
            </Layout>
          </Layout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
