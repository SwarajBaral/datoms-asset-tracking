import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import React, { useState } from "react";

function Date(props) {
  const { date } = props;
  return (
    <div>
      <Title level={4}>Live tracking</Title>
      <Text type="primary">{date}</Text>
    </div>
  );
}

export default Date;
