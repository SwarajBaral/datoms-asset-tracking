import Layout, { Header } from "antd/lib/layout/layout";
import Title from "antd/lib/typography/Title";

import React from "react";

function HeaderLayout() {
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          background: "#fff",
          padding: "0 0.5rem",
          // position: "fixed",
          // zIndex: 1,
          // width: "100%",
        }}
      >
        <Title style={{ paddingTop: "8px" }} level={3}>
          ASSET TRACKING
        </Title>
        <img src="./datoms.svg" alt="logo" width="200px" />
        {/* <Avatar size={32}  style={{ borderRadius: "0" }} /> */}
      </Header>
    </Layout>
  );
}

export default HeaderLayout;
