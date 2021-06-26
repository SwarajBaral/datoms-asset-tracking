import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Table, Input, Button, Space } from 'antd';
import GaugeChart from 'react-gauge-chart'
import { Temperature } from 'react-environment-chart';

const Card_title = 'Shipment Details'
const Card_content = 'In transit'
const Asset_number = 'aexkiXKXJSDF092'
const temp_value = 18
const tilt_percent = 0.47
const gauge_percent = 0.15
const consignment_value = 60
const on_road_value = 43
const on_hold_value = 64
const overdue_value = 16

const dataSource = [
    {
        key: 1,
        aid: 'AexkiXKXJSDF092',
        remark: 'In transit'
    },
    {
        key: 2,
        aid: 'AmanKDJSLKKL032',
        remark: 'In transit'
    },
];

const columns = [
    {
        title: 'Asset ID',
        dataIndex: 'aid',
        key: 'aid',
    },
    {
        title: 'Remark',
        dataIndex: 'remark',
        key: 'remark',
    }
];

export default function MyComponent(props) {
    const today = new Date()

    const [date, setDate] = useState(today.toLocaleString())
    const [time, setTime] = useState(today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true }))

    useEffect(() => {
        const interval = setInterval(() => {
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    });
    return (
        <div>
            <h1>Shipment Status</h1>
            <p>{date}</p>
            <Row>
                <Col span={6}>
                    <Card title={'Consignment'}>
                        {consignment_value}
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title={'On Road'}>
                        {on_road_value}
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title={'On Hold'}>
                        {on_hold_value}
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title={'Overdue'}>
                        {overdue_value}
                    </Card>
                </Col>
            </Row><br />
            <Row>
                <Col span={12}>
                    <Card title={Card_title} >
                        <center>
                            {Card_content}
                        </center>
                        <center>
                            Asset ID : {Asset_number}
                        </center>
                        <small>Time Updated : {time}</small>
                    </Card><br />
                    <Table dataSource={dataSource} columns={columns} />
                </Col>
                <Col span={12}>
                    <center><h1>Asset Details</h1></center>
                    <Row>
                        <Col span={1}></Col>
                        <Col span={11}>
                            <Card>
                                <Temperature value={temp_value} height={300} />
                                <center>Temperature - <b>{temp_value} °C</b></center>
                            </Card>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={11}>
                            <Card title='Orientation'>
                                <GaugeChart id="gauge-chart2"
                                    nrOfLevels={30}
                                    percent={tilt_percent}
                                    formatTextValue={tilt_percent => (tilt_percent * 1.80).toFixed(1) + ' deg'}
                                    cornerRadius={3}
                                    textColor='#464A4F'
                                />
                                <center>Tilt(Deg)</center>
                                <small>Time Updated: {time}</small>
                            </Card>
                            <br />
                            <Card title='Shock'>
                                <GaugeChart id="gauge-chart3"
                                    nrOfLevels={8}
                                    percent={gauge_percent}
                                    formatTextValue={gauge_percent => (gauge_percent / 12.5).toFixed(1) + ' G'}
                                    textColor='#464A4F'
                                />
                                <center>Force(G)</center>
                                <small>Time Updated: {time}</small>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}
