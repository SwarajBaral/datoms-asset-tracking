import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import React, { useEffect, useState } from "react";
import randomLocation from "random-location";
import { Card, Table, Tag, Space, Col, Row } from "antd";
import Pins from "./Pins";
import ReactMapGL, {
  Source,
  Layer,
  FullscreenControl,
  Marker,
  Popup,
} from "react-map-gl";
import mapboxgl from "mapbox-gl";

import { useMediaQuery } from "../hooks";
import AssetInfo from "./AssetInfo";

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

const fullscreenControlStyle = {
  top: 0,
  left: 0,
  padding: "10px",
};

function pointOnCircle(assetId, color) {
  const randomPoint = randomLocation.randomCirclePoint(bbsr, R);
  //   console.log(randomPoint);
  // API call with randomPoint
  return {
    type: "Point",
    id: assetId,
    mark: color,
    latitude: randomPoint.latitude,
    longitude: randomPoint.longitude,
    // coordinates: [randomPoint.longitude, randomPoint.latitude],
  };
}

function Map() {
  const [viewport, setViewport] = useState({
    latitude: 20.2961,
    longitude: 85.8245,
    zoom: 9,
  });
  const [pointAData, setPointAData] = useState({ latitude: 0, longitude: 0 });
  const [pointBData, setPointBData] = useState({ latitude: 0, longitude: 0 });
  const [popUpInfo, setPopUpInfo] = useState(null);

  const [date, setDate] = useState(new Date().toLocaleString());

  let locationPoints = [pointAData, pointBData];

  let isMobile = useMediaQuery("(max-width: 992px)");

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date().toLocaleString());
      setPointAData(pointOnCircle("8754", "#f00"));
      setPointBData(pointOnCircle("5421", "#08f"));
    }, 2500);
    return () => {
      clearInterval(interval);
    };
  });

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setPopUpInfo(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

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
            setViewport(viewport);
          }}
        >
          <Pins
            data={locationPoints}
            onClick={setPopUpInfo}
            className="markers"
          />
          {popUpInfo && (
            <Popup
              tipSize={5}
              anchor="top"
              longitude={popUpInfo.longitude}
              latitude={popUpInfo.latitude}
              closeOnClick={false}
              onClose={setPopUpInfo}
            >
              <AssetInfo info={popUpInfo} />
            </Popup>
          )}
          {/* {pointBData && (
            <Source type="geojson" data={pointBData}>
              <Layer {...pointB} />
            </Source>
          )}
          {pointAData && (
            // <Source type="geojson" data={pointAData}>
            //   <Layer {...pointA}>Henlo</Layer>
            // </Source>
            <Pins data={pointAData} />
          )} */}
          <FullscreenControl style={fullscreenControlStyle} />
        </ReactMapGL>
        {/* <div style={{ height: "100vh" }}>
          <Card
            title="Real time location"
            style={{
              marginLeft: "1em",
              borderRadius: "6px",
              boxShadow: "0 0 0.75em rgba(0, 0, 0, 0.2)",
              height: "100%",
            }}
          >
            <Table dataSource={data} pagination={false} bordered>
              <Column title="ID" dataIndex="assetId" key="assetId" />
              <Column title="Color" dataIndex="color" key="color" />
              <ColumnGroup title="Location">
                <Column title="Lat" dataIndex="lat" key="lat" />
                <Column title="Long" dataIndex="long" key="long" />
              </ColumnGroup>
            </Table>
          </Card>
        </div> */}
      </div>
    </div>
  );
}

export default Map;
