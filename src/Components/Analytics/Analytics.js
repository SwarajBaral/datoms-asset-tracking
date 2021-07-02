import React, { useEffect, useState } from "react";
import { Line } from '@ant-design/charts';
import { Row, Col, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const data = [
    { client_id: 'aexkiDSJFLK083', stars: 5 },
    { client_id: 'amanKDFJS32940', stars: 4 },
    { client_id: 'swarajKJDSF321', stars: 5 },
    { client_id: 'leasdfjkKSDF21', stars: 5 },
    { client_id: 'sdfljlkKDSF212', stars: 5 },
    { client_id: 'sdfjlDFSLL3122', stars: 3 },
    { client_id: 'sdkflsdjJKDFS2', stars: 4 },
];

const config = {
    data,
    height: 400,
    xField: 'client_id',
    yField: 'stars',
    point: {
        size: 6,
        shape: 'diamond',
    },
};
const force_config = {
    data,
    height: 400,
    xField: 'client_id',
    yField: 'stars',
    point: {
        size: 6,
        shape: 'diamond',
    },
};
const tiltation_config = {
    data,
    height: 400,
    xField: 'client_id',
    yField: 'stars',
    point: {
        size: 6,
        shape: 'diamond',
    },
};
const temp_config = {
    data,
    height: 400,
    xField: 'client_id',
    yField: 'stars',
    point: {
        size: 6,
        shape: 'diamond',
    },
};

const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="">Last Hour</a>
        </Menu.Item>
        <Menu.Item key="1">
            <a href="">Last Day</a>
        </Menu.Item>
        <Menu.Item key="3">Last 7 Days</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="4">Last 30 Days</Menu.Item>
    </Menu>
);

export default function Analytics() {
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
                    second: "numeric",
                    hour12: true,
                })
            );
            setDate(new Date().toLocaleString());
            console.log(date, time);
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <div>
            <Row>
                <Col span={12} style={{ padding: 5 }}>
                    <center>
                        <h1>
                            Client Ratings
                        </h1>
                    </center><br />
                    <Dropdown overlay={menu} trigger={['click']}>
                        <h1>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{ textAlign: 'right' }}>
                                Select Time <DownOutlined />
                            </a>
                        </h1>
                    </Dropdown><br />
                    <Line {...config} /><br />
                    <small>Time Updated : {time}</small>
                </Col>
                <Col span={12} style={{ padding: 5 }}>
                    <center>
                        <h1>
                            Force Exertion on Asset (w.r.t Time)
                        </h1>
                    </center><br />
                    <Dropdown overlay={menu} trigger={['click']}>
                        <h1>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{ textAlign: 'right' }}>
                                Select Time <DownOutlined />
                            </a>
                        </h1>
                    </Dropdown><br />
                    <Line {...force_config} /><br />
                    <small>Time Updated : {time}</small>
                </Col>
            </Row>
            <Row>
                <Col span={12} style={{ padding: 5 }}>
                    <center>
                        <h1>
                            Angle of Tiltation (w.r.t. Time)
                        </h1>
                    </center><br />
                    <Dropdown overlay={menu} trigger={['click']}>
                        <h1>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{ textAlign: 'right' }}>
                                Select Time <DownOutlined />
                            </a>
                        </h1>
                    </Dropdown><br />
                    <Line {...tiltation_config} /><br />
                    <small>Time Updated : {time}</small>
                </Col>
                <Col span={12} style={{ padding: 5 }}>
                    <center>
                        <h1>
                            Temparature of Asset
                        </h1>
                    </center><br />
                    <Dropdown overlay={menu} trigger={['click']}>
                        <h1>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{ textAlign: 'right' }}>
                                Select Time <DownOutlined />
                            </a>
                        </h1>
                    </Dropdown><br />
                    <Line {...temp_config} /><br />
                    <small>Time Updated : {time}</small>
                </Col>
            </Row>
        </div>
    )
}
