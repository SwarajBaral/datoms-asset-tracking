import React, { useEffect, useState } from "react";
import { Card, Row, Col, Table, Select, Button, Breadcrumb } from "antd";
import GaugeChart from "react-gauge-chart";
import customData from "./data.json";
import { Liquid } from "@ant-design/charts";
import { Link } from "react-router-dom";

const { Option } = Select;
const { Meta } = Card;
// const Card_title = "Shipment Details";
// const Card_content = "In transit";
// const Asset_number = "aexkiXKXJSDF092";
// const temp_value = 18;
// const tilt_percent = 0.47;
// const gauge_percent = 0.15;

var initialSelect = {
  battery: {
    percent: 0,
    outline: {
      border: 4,
      distance: 4,
    },
    wave: { length: 128 },
  },
  assetId: "",
  status: "",
  temp: 0,
  tilt: 0,
  shock: 0,
};

var assets = [
  {
    battery: {
      percent: 0.5,
      outline: {
        border: 4,
        distance: 4,
      },
      wave: { length: 128 },
    },
    assetId: "A",
    status: "On road",
    temp: 15,
    tilt: 0.6,
    shock: 0.7,
  },
  {
    battery: {
      percent: 0.3,
      outline: {
        border: 4,
        distance: 4,
      },
      wave: { length: 128 },
    },
    assetId: "B",
    status: "On road",
    temp: 13,
    tilt: 0.47,
    shock: 0.17,
  },
];
// var assetA = {
//   battery: {
//     percent: 0.5,
//     outline: {
//       border: 4,
//       distance: 4,
//     },
//     wave: { length: 128 },
//   },
//   assetId: "A",
//   temp: 15,
//   tilt: 0.6,
//   shock: 0.7,
// };
// var assetB = {
//   battery: {
//     percent: 0.3,
//     outline: {
//       border: 4,
//       distance: 4,
//     },
//     wave: { length: 128 },
//   },
//   assetId: "B",
//   temp: 13,
//   tilt: 0.47,
//   shock: 0.17,
// };

var batteryConfig = {
  percent: 0.5,
  outline: {
    border: 4,
    distance: 4,
  },
  wave: { length: 128 },
};
const dataSource = [
  {
    key: 1,
    aid: assets[0].assetId,
    remark: "In transit",
  },
  {
    key: 2,
    aid: assets[1].assetId,
    remark: "In transit",
  },
];

const columns = [
  {
    title: "Asset ID",
    dataIndex: "aid",
    key: "aid",
  },
  {
    title: "Remark",
    dataIndex: "remark",
    key: "remark",
  },
];

export default function MyComponent(props) {
  const today = new Date();
  const [dropdown, setDropdown] = useState(initialSelect);
  const [asset, setAsset] = useState(null);
  const [date, setDate] = useState(today.toLocaleString());
  const [time, setTime] = useState(
    today.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    })
  );
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTime(
  //       new Date().toLocaleString("en-US", {
  //         hour: "numeric",
  //         minute: "numeric",
  //         second: "numeric",
  //         hour12: true,
  //       })
  //   );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })
      );
      setDate(new Date().toLocaleString());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "flex-end",
        }}
      >
        <Button type="primary">
          <Link to="/analytics/obd">Container OBDs</Link>
        </Button>
      </div>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Asset-details</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
        <div>
          <div className="asset-selector-container">
            <div>
              <h1>Shipment Status</h1>
              <p>{date}</p>
            </div>
            {dropdown === initialSelect ? (
              <div>
                <h2>
                  <i>
                    <b>Select an asset to know the details</b>
                  </i>
                </h2>
              </div>
            ) : null}
            <div>
              <h1>Asset Details</h1>
              <Select
                className="asset-selector"
                defaultValue="select an asset to view details"
                onChange={(value) => setDropdown(assets[value])}
              >
                <Option disabled>select an asset to view details</Option>
                {assets.map((asset, index) => (
                  <Option key={`asset-${index}`} value={index}>
                    Asset-{asset.assetId}
                  </Option>
                ))}
              </Select>
            </div>
          </div>
          <Row>
            <Col span={24}>
              {/* <Card title={"CURRENT ASSET DETAILS"} className="asset-top-card">
            <pre>
              <b>ASSET ID</b> : {dropdown.assetId}
              <br />
              <b>STATUS</b> : {dropdown.status}
              <br />
            </pre>
            <small>Last Updated : {time}</small>
          </Card> */}
              <Row gutter={16}>
                <Col span={6} style={{ padding: 5 }} className="asset-info-col">
                  <Card title="Shock" className="o_cards">
                    <GaugeChart
                      id="gauge-chart3"
                      nrOfLevels={8}
                      percent={dropdown.shock}
                      formatTextValue={(gauge_percent) =>
                        (gauge_percent / 12.5).toFixed(1) + " G"
                      }
                      textColor="#464A4F"
                    />
                    <div className="asset-card-details">
                      <center>
                        <strong>Force(G)</strong>
                      </center>
                      <center>
                        <small>Last Updated: {time}</small>
                      </center>
                    </div>
                    {/* <Meta title="Force(G)" description=`Last Updated: ${time}` /> */}
                  </Card>
                </Col>
                {/* font-size: 70px;
    font-weight: 500; */}
                <Col span={6} style={{ padding: 5 }} className="asset-info-col">
                  <Card title="Temperature" className="o_cards">
                    <center
                      className={"bigvalue"}
                      style={{
                        fontSize: "70px",
                        fontWeight: "500",
                        color:
                          parseInt(dropdown.temp) <= 13 ? "dodgerblue" : "red",
                      }}
                    >
                      {dropdown.temp}°C
                    </center>
                    <div className="asset-card-details">
                      <center>
                        <strong>Current Temperature</strong>
                      </center>
                      <center>
                        <small>Last Updated: {time}</small>
                      </center>
                    </div>
                  </Card>
                </Col>
                <Col span={6} style={{ padding: 5 }} className="asset-info-col">
                  <Card title={"Orientation"} className="o_cards">
                    <GaugeChart
                      id="gauge-chart2"
                      nrOfLevels={30}
                      percent={dropdown.tilt}
                      formatTextValue={(tilt_percent) =>
                        (tilt_percent * 1.8).toFixed(1) + " deg"
                      }
                      cornerRadius={3}
                      textColor="#464A4F"
                    />
                    <div className="asset-card-details">
                      <center>
                        <strong>Tilt(Deg)</strong>
                      </center>
                      <center>
                        <small>Last Updated: {time}</small>
                      </center>
                    </div>
                  </Card>
                </Col>
                <Col span={6} style={{ padding: 5 }} className="asset-info-col">
                  <Card title="Battery" className="o_cards">
                    <Liquid
                      {...dropdown.battery}
                      height={180}
                      color={
                        dropdown.battery.percent <= 0.3
                          ? "red"
                          : "rgb(0,206,150)"
                      }
                      className="battery-indicator"
                    />
                    <div className="asset-card-details">
                      <center>
                        <span>
                          <strong>Remaining</strong> :{" "}
                          {dropdown.battery.percent * 100} %
                        </span>
                      </center>
                      <center>
                        <small>Last Updated: {time}</small>
                      </center>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
