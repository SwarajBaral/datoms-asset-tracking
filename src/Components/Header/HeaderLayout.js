import Avatar from "antd/lib/avatar/avatar";
import Layout, { Header } from "antd/lib/layout/layout";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";
import {
  AreaChartOutlined,
  CompassOutlined,
  IdcardOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import logo from "./pheonix-logo.svg";

import React from "react";

function HeaderLayout() {
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#fff",
          padding: "0 0.5rem",
        }}
      >
        <div className="header-logo-section">
          <img src={logo} alt="logo" className="header-logo" />
          <Title level={3} className="header-title">
            Pheonix Robotix
          </Title>
        </div>
        <div className="user-area">
          <Avatar
            size={32}
            style={{ borderRadius: "50%" }}
            icon={<UserOutlined />}
          />
          <Text type="Primary" className="user-name">
            User
          </Text>
          <Button
            type="danger"
            shape="round"
            size="default"
            onClick={() =>
              alert("User login/logout functionality coming soon !")
            }
          >
            Logout
          </Button>
        </div>
      </Header>
    </Layout>
  );
}

export default HeaderLayout;
