import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, Menu, Layout } from "antd";
import {
    AreaChartOutlined,
    CompassOutlined,
    IdcardOutlined,
} from "@ant-design/icons";

import logo from "./D.svg";

function Sidebar() {
    const [collapse, setCollapse] = useState(false);

    const { Sider } = Layout;

    return (
        <Sider
            collapsible
            collapsed={collapse}
            onCollapse={setCollapse}
            style={{ baclground: "hsl(209,100%,16%)" }}
        >
            <div className="logo">
                <img
                    src={collapse ? logo : "./datoms.svg"}
                    alt="logo"
                    width={collapse ? "60%" : "100%"}
                />
            </div>
            <Menu defaultSelectedKeys={["Dashboard"]}>
                <Menu.Item key="Dashboard" icon={<IdcardOutlined />}>
                    <Link to="/">Dashboard</Link>
                </Menu.Item>
                <Menu.Item key="About" icon={<CompassOutlined />}>
                    <Link to="/overview">Overview</Link>
                </Menu.Item>
                <Menu.Item key="About obd" icon={<CompassOutlined />}>
                    <Link to="/overview2">Overview2</Link>
                </Menu.Item>
                <Menu.Item key="Analytics" icon={<AreaChartOutlined />}>
                    <Link to="/analytics">Analytics</Link>
                </Menu.Item>
            </Menu>
        </Sider>
    );
}

export default Sidebar;
