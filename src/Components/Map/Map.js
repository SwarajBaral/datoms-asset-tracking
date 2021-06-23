import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import React, { useEffect, useState } from "react";
import ReactMapGL, { Source, Layer } from "react-map-gl";
import randomLocation from "random-location";

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

function pointOnCircle({ center, angle, radius }) {
  const randomPoint = randomLocation.randomCirclePoint(bbsr, R);
  //   console.log(randomPoint);
  return {
    type: "Point",
    coordinates: [randomPoint.longitude, randomPoint.latitude],
  };
}

function Map() {
  const [viewport, setViewport] = useState({
    latitude: 20.2961,
    longitude: 85.8245,
    width: "100%",
    height: "100vh",
    zoom: 10,
  });
  const [pointAData, setPointAData] = useState(null);
  const [pointBData, setPointBData] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPointAData(
        pointOnCircle({
          center: [-100, 0],
          angle: Date.now() / 1000,
          radius: 20,
        })
      );
    }, 2500);
    // const animation = window.requestAnimationFrame(() =>
    //   setInterval(
    //     setPointData(
    //       pointOnCircle({
    //         center: [-100, 0],
    //         angle: Date.now() / 1000,
    //         radius: 20,
    //       })
    //     ),
    //     5000
    //   )
    // );
    return () => {
      clearInterval(interval);
      //   clearInterval(animation);

      //   window.cancelAnimationFrame(animation);
    };
  });

  return (
    <>
      <Title level={4}>Live tracking</Title>
      <Text type="secondary">22/06/2021, 12:00 PM</Text>
      <ReactMapGL
        id="map"
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
        mapStyle="mapbox://styles/doe-john-69/ckq74aknx3y3t18nqeyene0mc"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {pointAData && (
          <Source type="geojson" data={pointAData}>
            <Layer {...pointA} />
          </Source>
        )}
        {/* {pointBData && (
          <Source type="geojson" data={pointBData}>
            <Layer {...pointB} />
          </Source>
        )} */}
      </ReactMapGL>
    </>
  );
}

export default Map;