import React, { useEffect, useState, PureComponent } from "react";
import { Card, Row, Col, Table, Button, Breadcrumb } from "antd";
import GaugeChart from "react-gauge-chart";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { AreaChart, Area } from "recharts";
import { BarChart, Bar, Brush, ReferenceLine } from "recharts";
import { Link } from "react-router-dom";

const tilt_percent = 0.62;

const dataline = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const data = [
  {
    name: "",
    uv: 55,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "",
    uv: 60,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "",
    uv: 120,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "",
    uv: 115,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "",
    uv: 118,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "",
    uv: 122,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "",
    uv: 120,
    pv: 4300,
    amt: 2100,
  },
];

const datafuel = [
  { name: "1", uv: 300, pv: 456 },
  { name: "2", uv: -145, pv: 230 },
  { name: "3", uv: -100, pv: 345 },
  { name: "4", uv: -8, pv: 450 },
  { name: "5", uv: 100, pv: 321 },
  { name: "6", uv: 9, pv: 235 },
  { name: "7", uv: 53, pv: 267 },
  { name: "8", uv: 252, pv: -378 },
  { name: "9", uv: 79, pv: -210 },
  { name: "10", uv: 294, pv: -23 },
  { name: "12", uv: 43, pv: 45 },
  { name: "13", uv: -74, pv: 90 },
  { name: "14", uv: -71, pv: 130 },
  { name: "15", uv: -117, pv: 11 },
  { name: "16", uv: -186, pv: 107 },
  { name: "17", uv: -16, pv: 926 },
  { name: "18", uv: -125, pv: 653 },
  { name: "19", uv: 222, pv: 366 },
  { name: "20", uv: 372, pv: 486 },
  { name: "21", uv: 182, pv: 512 },
  { name: "22", uv: 164, pv: 302 },
  { name: "23", uv: 316, pv: 425 },
  { name: "24", uv: 131, pv: 467 },
  { name: "25", uv: 291, pv: -190 },
  { name: "26", uv: -47, pv: 194 },
  { name: "27", uv: -415, pv: 371 },
  { name: "28", uv: -182, pv: 376 },
  { name: "29", uv: -93, pv: 295 },
  { name: "30", uv: -99, pv: 322 },
  { name: "31", uv: -52, pv: 246 },
  { name: "32", uv: 154, pv: 33 },
  { name: "33", uv: 205, pv: 354 },
  { name: "34", uv: 70, pv: 258 },
  { name: "35", uv: -25, pv: 359 },
  { name: "36", uv: -59, pv: 192 },
  { name: "37", uv: -63, pv: 464 },
  { name: "38", uv: -91, pv: -2 },
  { name: "39", uv: -66, pv: 154 },
  { name: "40", uv: -50, pv: 186 },
];

function Numbers2() {
  const today = new Date();

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
          <Link to="/analytics">Asset Details</Link>
        </Button>
      </div>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Asset-details</Breadcrumb.Item>
        <Breadcrumb.Item>Container-obds</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
        <h1>Container Status</h1>
        <p>Last Updated : {date}</p>
        <Row className={"overview2"} style={{ marginBottom: "1.5em" }}>
          <Col span={6}>
            <Card title={"Current RPM"} className="o_cards-2">
              <GaugeChart
                nrOfLevels={30}
                percent={tilt_percent}
                formatTextValue={(tilt_percent) =>
                  (tilt_percent * 1.8).toFixed(1) + " RPM"
                }
                cornerRadius={3}
                textColor="#464A4F"
              />
              <center>
                <b>RPM</b>
              </center>
              <center>
                <small>Last Updated: {time}</small>
              </center>
            </Card>
          </Col>
          <Col span={18}>
            <Card title={"Engine RPM"} className="o_cards-2">
              <div style={{ width: "100%", height: 180 }}>
                <ResponsiveContainer>
                  <AreaChart
                    data={data}
                    margin={{
                      top: 0,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="uv"
                      stroke="#8884d8"
                      fill="#8884d8"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </Col>
        </Row>
        <Row className={"overview2"} style={{ marginBottom: "1.5em" }}>
          <Col span={6}>
            <Card title={"Current KMPH"} className="o_cards-2">
              <GaugeChart
                nrOfLevels={30}
                percent={tilt_percent}
                formatTextValue={(tilt_percent) =>
                  (tilt_percent * 1.8).toFixed(1) + " RPM"
                }
                cornerRadius={3}
                textColor="#464A4F"
              />
              <center>
                <b>KMPH</b>
              </center>
              <center>
                <small>Last Updated: {time}</small>
              </center>
            </Card>
          </Col>
          <Col span={18}>
            <Card title={"Vehicle Speed"} className="o_cards-2">
              <div style={{ width: "100%", height: 180 }}>
                <ResponsiveContainer>
                  <AreaChart
                    data={data}
                    margin={{
                      top: 0,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="uv"
                      stroke="#8884d8"
                      fill="#8884d8"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginBottom: "1.5em" }}>
          <Col span={24}>
            <Card title={"Calculated Engine Load"} className="o_cards-long">
              <div style={{ width: "100%", height: 180 }}>
                <ResponsiveContainer>
                  <LineChart
                    width={500}
                    height={300}
                    data={dataline}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="pv"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginBottom: "1.5em" }}>
          <Col span={24}>
            <Card
              title={"Fuel Rail Pressure (Direct Inject)"}
              className="o_cards-long"
            >
              <div style={{ width: "100%", height: 180 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    width={500}
                    height={300}
                    data={datafuel}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend
                      verticalAlign="top"
                      wrapperStyle={{ lineHeight: "40px" }}
                    />
                    <ReferenceLine y={0} stroke="#000" />
                    <Brush dataKey="name" height={30} stroke="#8884d8" />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Numbers2;
