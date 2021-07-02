import React from "react";

function AssetInfo({ info }) {
  return (
    <>
      <h2>Asset information</h2>
      <h3>Asset-ID: {info.id}</h3>
      <p>
        <strong>Current latitude: </strong> {info.latitude.toFixed(4)}
      </p>
      <p>
        <strong>Current longitude: </strong>
        {info.longitude.toFixed(4)}
      </p>
      <p>
        <strong>Distance from destination: </strong>~6kms
      </p>
      <p>
        <strong>Time to destination: </strong>06H:09M:46S
      </p>
    </>
  );
}

export default AssetInfo;
