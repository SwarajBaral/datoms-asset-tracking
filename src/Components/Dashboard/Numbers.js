import React, { useEffect, useState } from "react";
import { Card, Row, Col, Table } from "antd";
import GaugeChart from "react-gauge-chart";
import customData from './data.json';

<<<<<<< Updated upstream
const Card_title = "Shipment Details";
const Card_content = "In transit";
const Asset_number = "aexkiXKXJSDF092";
const temp_value = 18;
const tilt_percent = 0.47;
const gauge_percent = 0.15;

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
        aid: "AexkiXKXJSDF092",
        remark: "In transit",
    },
    {
        key: 2,
        aid: "AmanKDJSLKKL032",
        remark: "In transit",
    },
];
=======
var status = "In transit";
var Asset_number = "aexkiXKXJSDF092";
var temp_value = 18;
var tilt_percent = 0.47;
var gauge_percent = 0.15;
var battery = 69
>>>>>>> Stashed changes

const columns = [
    {
        title: "Asset ID",
        dataIndex: "aid",
        key: "aid",
    },
    {
<<<<<<< Updated upstream
        title: "Remark",
        dataIndex: "remark",
        key: "remark",
=======
        title: "Status",
        dataIndex: "remark",
        key: "status",
    },
    {
        title: "#",
        dataIndex: "click",
        key: "click",
        render: (text, record) => (
            <button id={record['aid']} onClick={() => {
                Asset_number = record['aid']
                status = record['remark']
                temp_value = record['temp_value']
                tilt_percent = record['tilt_percent']
                gauge_percent = record['gauge_percent']
                battery = record['battery']
            }} style={{ textAlign: 'center', cursor: 'pointer' }}>
                {'select'}
            </button>
        ),
>>>>>>> Stashed changes
    },
];

export default function MyComponent(props) {
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
<<<<<<< Updated upstream
                    second: "numeric",
=======
>>>>>>> Stashed changes
                    hour12: true,
                })
            );
            setDate(new Date().toLocaleString());
<<<<<<< Updated upstream
            console.log(date, time);
=======
>>>>>>> Stashed changes
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);
<<<<<<< Updated upstream
    return (
        <div>
            <h1>Shipment Status</h1>
            <p>{date}</p>

            <Row>
                <Col span={12}>
                    <Card title={Card_title} style={{ margin: 5 }}>
                        <center>{Card_content}</center>
                        <center>Asset ID : {Asset_number}</center>
                        <small>Time Updated : {time}</small>
                    </Card>
                    <br />
                    <Row>
                        <Col span={12} style={{ padding: 5 }}>
                            <Card title="Shock">
=======

    return (
        <div>
            <h1>Shipment Status</h1>
            <p>Last Updated : {date}</p>
            <Row className={'overview'}>
                <Col span={14}>
                    <Card title={"LIST OF ASSETS"} className={'table_of_assets'}>
                        <Table dataSource={customData['Datas']} columns={columns} style={{ borderColor: 'red', textAlign: 'center' }} />
                    </Card>
                </Col>
                <Col span={10}>
                    <Card title={"CURRENT ASSET DETAILS"} style={{ margin: '0 5px' }}>
                        <pre>
                            <b>ASSET ID</b> : {Asset_number}<br />
                            <b>STATUS</b>   : {status}<br />
                        </pre>
                        <small>Last Updated : {time}</small>
                    </Card>
                    <Row>
                        <Col span={12} style={{ padding: 5 }}>
                            <Card title="Shock" className="o_cards">
>>>>>>> Stashed changes
                                <GaugeChart
                                    id="gauge-chart3"
                                    nrOfLevels={8}
                                    percent={gauge_percent}
                                    formatTextValue={(gauge_percent) =>
                                        (gauge_percent / 12.5).toFixed(1) + " G"
                                    }
                                    textColor="#464A4F"
                                />
                                <center>Force(G)</center>
                                <center>
<<<<<<< Updated upstream
                                    <small>Time Updated: {time}</small>
                                </center>
                            </Card><br />
                            <Card title="Temperature">
                                <Temperature value={temp_value} height={300} />
                                <center>
                                    Temperature - <b>{temp_value} °C</b>
                                </center>
                                <center>
                                    <small>Time Updated: {time}</small>
=======
                                    <small>Last Updated: {time}</small>
                                </center>
                            </Card>
                            <br />
                            <Card title="Temperature">
                                {/* <Temperature value={temp_value} height={300} /> */}
                                <center>
                                    <b>Temperature : </b>{temp_value} °C
                                </center>
                                <center>
                                    <small>Last Updated: {time}</small>
>>>>>>> Stashed changes
                                </center>
                            </Card>
                        </Col>
                        <Col span={12} style={{ padding: 5 }}>
<<<<<<< Updated upstream
                            <Card title="Orientation">
=======
                            <Card title={"Orientation"} className="o_cards">
>>>>>>> Stashed changes
                                <GaugeChart
                                    id="gauge-chart2"
                                    nrOfLevels={30}
                                    percent={tilt_percent}
                                    formatTextValue={(tilt_percent) =>
                                        (tilt_percent * 1.8).toFixed(1) + " deg"
                                    }
                                    cornerRadius={3}
                                    textColor="#464A4F"
                                />
                                <center>Tilt(Deg)</center>
                                <center>
<<<<<<< Updated upstream
                                    <small>Time Updated: {time}</small>
=======
                                    <small>Last Updated: {time}</small>
>>>>>>> Stashed changes
                                </center>
                            </Card>
                            <br />
                            <Card title="Battery" className="battery">
                                <div style={{ textAlign: "center" }}>
<<<<<<< Updated upstream
                                    <Liquid {...batteryConfig} />
=======
                                    {/* <Liquid {...batteryConfig} /> */}
                                    <b>Remaining : </b>{battery} %
                                    <center>
                                        <small>Last Updated: {time}</small>
                                    </center>
>>>>>>> Stashed changes
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Col>
<<<<<<< Updated upstream
                <Col span={12}>
                    <center>
                        <h1>Asset Details</h1>
                    </center>
                    <Table dataSource={dataSource} columns={columns} />
                </Col>
=======

>>>>>>> Stashed changes
            </Row>
        </div>
    );
}
