import React, { useEffect, useState } from "react";
import { Card, Row, Col, Table, Select } from "antd";
import GaugeChart from "react-gauge-chart";
import { Temperature } from "react-environment-chart";
import { Liquid } from "@ant-design/charts";

const { Option } = Select;
const Card_title = "Shipment Details";
const Card_content = "In transit";
const Asset_number = "aexkiXKXJSDF092";
const temp_value = 18;
const tilt_percent = 0.47;
const gauge_percent = 0.15;

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
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
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
    <div>
      <div className="asset-selector-container">
        <div>
          <h1>Shipment Status</h1>
          <p>{date}</p>
        </div>
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
        <Col span={12}>
          <Card title={Card_title} style={{ margin: 5 }}>
            <center>{Card_content}</center>
            <center>Asset ID : {dropdown.assetId}</center>
            <small>Time Updated : {time}</small>
          </Card>
          <br />
          <Row>
            <Col span={12} style={{ padding: 5 }}>
              <Card title="Shock">
                <GaugeChart
                  id="gauge-chart3"
                  nrOfLevels={8}
                  percent={dropdown.shock}
                  formatTextValue={(gauge_percent) =>
                    (gauge_percent / 12.5).toFixed(1) + " G"
                  }
                  textColor="#464A4F"
                  animate={true}
                />
                <center>Force(G)</center>
                <center>
                  <small>Time Updated: {time}</small>
                </center>
              </Card>
              <br />
              <Card title="Temperature">
                <Temperature value={dropdown.temp} height={300} />
                <center>
                  Temperature - <b>{dropdown.temp} °C</b>
                </center>
                <center>
                  <small>Time Updated: {time}</small>
                </center>
              </Card>
            </Col>
            <Col span={12} style={{ padding: 5 }}>
              <Card title="Orientation">
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
                <center>Tilt(Deg)</center>
                <center>
                  <small>Time Updated: {time}</small>
                </center>
              </Card>
              <br />
              <Card title="Battery" className="battery">
                <div style={{ textAlign: "center" }}>
                  <Liquid {...dropdown.battery} />
                </div>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <Table dataSource={dataSource} columns={columns} />
        </Col>
      </Row>
    </div>
  );
}
