import { Breadcrumb, Table, Tag, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";
import { useState } from "react";

const dataSource = [
  {
    key: "1",
    name: "Mike",
    dest: "10 Downing Street",
    dod: "29/06/2021",
    status: "Reached",
    tags: ["High"],
  },
  {
    key: "2",
    name: "John",
    dest: "10 Downing Street",
    dod: "03/07/2021",
    status: "En route",
    tags: ["Low"],
  },
];

const columns = [
  {
    title: "Consignment Details",
    dataIndex: "name",
    key: "name",
    render: (text) => (
      <>
        <b>{text}</b>
      </>
    ),
  },
  {
    title: "Destination",
    dataIndex: "dest",
    key: "dest",
  },
  {
    title: "Date of disapatch",
    dataIndex: "dod",
    key: "dod",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    // render: ()
  },
  {
    title: "Priority",
    key: "tags",
    dataIndex: "tags",
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "High") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
];

function Allassets() {
  const [date, setDate] = useState(new Date().toLocaleString());
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date().toLocaleString());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>All-assets</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
        <Title level={4}>Live tracking</Title>
        <Text type="primary">{date}</Text>
        <Table
          dataSource={dataSource}
          columns={columns}
          rowSelection="True"
          bordered="True"
          style={{ marginTop: "1.2em" }}
        />
      </div>
    </>
  );
}

export default Allassets;
