import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import React, { useEffect, useState } from "react";
import randomLocation from "random-location";
import { Card, Table, Tag, Space, Col, Row } from "antd";

import ReactMapGL, { Source, Layer, FullscreenControl } from "react-map-gl";
import mapboxgl from "mapbox-gl";

import { useMediaQuery } from "../hooks";

mapboxgl.workerClass =
  // eslint-disable-next-line import/no-webpack-loader-syntax
  require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const { Column, ColumnGroup } = Table;

const pointA = {
  type: "circle",
  paint: {
    "circle-radius": 10,
    "circle-color": "#007cbf",
  },
};
const pointB = {
  type: "circle",
  paint: {
    "circle-radius": 10,
    "circle-color": "red",
  },
};

const bbsr = {
  latitude: 20.2961,
  longitude: 85.8245,
};

const R = 5000;

// const randomRoutes = [{
//   a: {
//     lat: "20.246200",
//     long: "85.885661"
//   }
// }]
const fullscreenControlStyle = {
  top: 0,
  left: 0,
  padding: "10px",
};

function pointOnCircle({ center, angle, radius }) {
  const randomPoint = randomLocation.randomCirclePoint(bbsr, R);
  //   console.log(randomPoint);
  // API call with randomPoint
  return {
    type: "Point",
    coordinates: [randomPoint.longitude, randomPoint.latitude],
  };
}

function Map() {
  const [viewport, setViewport] = useState({
    latitude: 20.2961,
    longitude: 85.8245,
    zoom: 9,
  });
  const [pointAData, setPointAData] = useState({ coordinates: [0, 0] });
  const [pointBData, setPointBData] = useState({ coordinates: [0, 0] });
  const [date, setDate] = useState(new Date().toLocaleString());

  let isMobile = useMediaQuery("(max-width: 992px)");

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date().toLocaleString());
      setPointAData(
        pointOnCircle({
          center: [-100, 0],
          angle: Date.now() / 1000,
          radius: 20,
        })
      );
      setPointBData(
        pointOnCircle({
          center: [-100, 0],
          angle: Date.now() / 1000,
          radius: 20,
        })
      );
    }, 2500);
    return () => {
      clearInterval(interval);
    };
  });
  const data = [
    {
      key: "1",
      assetId: "83028",
      color: "blue",
      // client: "Blue Corp",
      // dest: "Jaydev vihar",
      lat: pointAData.coordinates[1].toFixed(4),
      long: pointAData.coordinates[0].toFixed(4),
    },
    {
      key: "2",
      assetId: "82541",
      color: "red",
      // client: "Red Corp",
      // dest: "Jaydev vihar",
      lat: pointBData.coordinates[1].toFixed(4),
      long: pointBData.coordinates[0].toFixed(4),
    },
    {
      key: "3",
      assetId: "9631",
      color: "red",
      // client: "Red Corp",
      // dest: "Jaydev vihar",
      lat: (Math.random() * 100).toFixed(4),
      long: (Math.random() * 100).toFixed(4),
    },
    {
      key: "3",
      assetId: "9631",
      color: "red",
      // client: "Red Corp",
      // dest: "Jaydev vihar",
      lat: (Math.random() * 100).toFixed(4),
      long: (Math.random() * 100).toFixed(4),
    },
    {
      key: "3",
      assetId: "9631",
      color: "red",
      // client: "Red Corp",
      // dest: "Jaydev vihar",
      lat: (Math.random() * 100).toFixed(4),
      long: (Math.random() * 100).toFixed(4),
    },
    {
      key: "3",
      assetId: "9631",
      color: "red",
      // client: "Red Corp",
      // dest: "Jaydev vihar",
      lat: (Math.random() * 100).toFixed(4),
      long: (Math.random() * 100).toFixed(4),
    },
    {
      key: "3",
      assetId: "9631",
      color: "red",
      // client: "Red Corp",
      // dest: "Jaydev vihar",
      lat: (Math.random() * 100).toFixed(4),
      long: (Math.random() * 100).toFixed(4),
    },
    {
      key: "3",
      assetId: "9631",
      color: "red",
      // client: "Red Corp",
      // dest: "Jaydev vihar",
      lat: (Math.random() * 100).toFixed(4),
      long: (Math.random() * 100).toFixed(4),
    },
    {
      key: "3",
      assetId: "9631",
      color: "red",
      // client: "Red Corp",
      // dest: "Jaydev vihar",
      lat: (Math.random() * 100).toFixed(4),
      long: (Math.random() * 100).toFixed(4),
    },
    {
      key: "3",
      assetId: "9631",
      color: "red",
      // client: "Red Corp",
      // dest: "Jaydev vihar",
      lat: (Math.random() * 100).toFixed(4),
      long: (Math.random() * 100).toFixed(4),
    },
  ];

  return (
    <div clssName="dashboard-map">
      <Title level={4}>Live tracking</Title>
      <Text type="secondary">{date}</Text>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <ReactMapGL
          id="map"
          {...viewport}
          width="100%"
          height="100vh"
          mapboxApiAccessToken={
            "pk.eyJ1IjoiZG9lLWpvaG4tNjkiLCJhIjoiY2txNzM2amplMDI4bTJ3cGJpcWwyeXI1ZyJ9._Fol_gJW1CT1XbiM_VqYkw"
          }
          mapStyle="mapbox://styles/doe-john-69/ckq74aknx3y3t18nqeyene0mc"
          onViewportChange={(viewport) => {
            console.log(viewport);
            setViewport(viewport);
          }}
        >
          {pointAData && (
            <Source type="geojson" data={pointAData}>
              <Layer {...pointA} />
            </Source>
          )}
          {pointBData && (
            <Source type="geojson" data={pointBData}>
              <Layer {...pointB} />
            </Source>
          )}
          <FullscreenControl style={fullscreenControlStyle} />
        </ReactMapGL>
        <div style={{ height: "100vh" }}>
          <Card
            title="Real time location"
            style={{
              marginLeft: "1em",
              borderRadius: "6px",
              boxShadow: "0 0 0.75em rgba(0, 0, 0, 0.2)",
              height: "100%",
            }}
          >
            {/* <Card type="inner" title="Inner Card title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Card>
            <Card
              style={{ marginTop: 16 }}
              type="inner"
              title="Inner Card title"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Card> */}
            <Table dataSource={data} pagination={false} bordered>
              <Column title="ID" dataIndex="assetId" key="assetId" />
              {/* <Column title="Client" dataIndex="client" key="client" />
              <Column title="Dest." dataIndex="dest" key="dest" /> */}
              <Column title="Color" dataIndex="color" key="color" />
              <ColumnGroup title="Location">
                <Column title="Lat" dataIndex="lat" key="lat" />
                <Column title="Long" dataIndex="long" key="long" />
              </ColumnGroup>
            </Table>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Map;
