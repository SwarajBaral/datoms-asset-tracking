import React, { useState } from "react";
import "./App.css";
import { Breadcrumb, Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Numbers from "./Components/Dashboard/Numbers";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HeaderLayout from "./Components/Header/HeaderLayout";
import Map from "./Components/Map/Map";
import Sidebar from "./Components/Sidebar/Sidebar";
import Analytics from "./Components/Analytics/Analytics";

function App() {
    const [collapse, setCollapse] = useState(false);

    const { Footer, Sider, Content } = Layout;
    return (
        <div className="App">
            <Router>
                <Layout>
                    <Sidebar />
                    <Layout>
                        <HeaderLayout />
                        <Content style={{ padding: "0 50px" }}>
                            <Breadcrumb style={{ margin: "16px 0" }}>
                                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                            </Breadcrumb>
                            <div className="site-layout-content">
                                <Switch>
                                    <Route path="/" exact component={Map} />
                                    <Route path="/overview" exact component={Numbers} />
                                    <Route path="/analytics" exact component={Analytics} />
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
