import React from "react";
import { Breadcrumb, Layout, Menu, Card, Col, Row } from "antd";
const consignment_value = 60;
const on_road_value = 43;
const on_hold_value = 64;
const overdue_value = 16;

function InfoCards() {
  return (
    <Row gutter={16}>
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
  );
}

export default InfoCards;
