import React, { useEffect, useState } from "react";
import { Card, Row, Col, Table } from "antd";
import GaugeChart from "react-gauge-chart";
import customData from './data.json';
import { Liquid } from "@ant-design/charts";

var status = "In transit";
var Asset_number = "aexkiXKXJSDF092";
var temp_value = 18;
var tilt_percent = 0.47;
var gauge_percent = 0.15;
var battery = 69

var batteryConfig = {
    percent: 0.01 * battery,
    outline: {
        border: 4,
        distance: 4,
    },
    wave: { length: 128 },
};

const columns = [
    {
        title: "Asset ID",
        dataIndex: "aid",
        key: "aid",
    },
    {
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
            <h1>Shipment Status</h1>
            <p>Last Updated : {date}</p>
            <Row className={'overview'}>

                <Col span={24}>
                    <Card title={"CURRENT ASSET DETAILS"} style={{ margin: '0 5px' }}>
                        <pre>
                            <b>ASSET ID</b> : {Asset_number}<br />
                            <b>STATUS</b>   : {status}<br />
                        </pre>
                        <small>Last Updated : {time}</small>
                    </Card>
                    <Row>
                        <Col span={6} style={{ padding: 5 }}>
                            <Card title="Shock" className="o_cards">
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
                                    <small>Last Updated: {time}</small>
                                </center>
                            </Card>
                        </Col >
                        <Col span={6} style={{ padding: 5 }}>
                            <Card title="Temperature" className={'temp'}>
                                <center className={'bigvalue'}>{temp_value}°C</center>
                                <center>
                                    Current Temperature
                                </center>
                                <center>
                                    <small>Last Updated: {time}</small>
                                </center>
                            </Card>
                        </Col >
                        <Col span={6} style={{ padding: 5 }}>
                            <Card title={"Orientation"} className="o_cards">
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
                                    <small>Last Updated: {time}</small>
                                </center >
                            </Card >
                        </Col >
                        <Col span={6} style={{ padding: 5 }}>
                            <Card title="Battery" className="battery">
                                <div style={{ textAlign: "center" }}>
                                    <Liquid {...batteryConfig} />
                                    <b>Remaining : </b>{battery} %
                                    <center>
                                        <small>Last Updated: {time}</small>
                                    </center>
                                </div >
                            </Card >
                        </Col >
                    </Row >
                </Col >
            </Row >
        </div >
    );
}
