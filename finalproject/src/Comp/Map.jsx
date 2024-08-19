import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";

const Map = (props) => {
  const position = props.position;

  return (
    <div className={`w-[${props.width}] h-[${props.height}]  border-2 rounded-2xl overflow-hidden`}>
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a
        href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
        contributors'
        />
        <Marker position={position}>
          <Popup>Address / Business name</Popup>
          <Tooltip> Address / Business name </Tooltip>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
