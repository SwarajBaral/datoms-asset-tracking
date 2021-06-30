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

const consignment_value = 64
const on_road_value = 32
const on_hold_value = 16
const overdue_value = 22

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
                        <Content style={{ padding: "0 50px", marginTop: "50px" }}>
                            <div className="site-card-wrapper">
                                <Row gutter={16} style={{}}>
                                    <Col xs={24} md={6}>
                                        <Card className="overview-cards" title={"Consignment"}>
                                            {consignment_value}
                                        </Card>
                                    </Col>
                                    <Col xs={24} md={6}>
                                        <Card className="overview-cards" title={"On Road"}>
                                            {on_road_value}
                                        </Card>
                                    </Col>
                                    <Col xs={24} md={6}>
                                        <Card className="overview-cards" title={"On Hold"}>
                                            {on_hold_value}
                                        </Card>
                                    </Col>
                                    <Col xs={24} md={6}>
                                        <Card className="overview-cards" title={"Overdue"}>
                                            {overdue_value}
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                        </Content>
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
