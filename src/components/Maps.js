import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";

const position = [23.685, 90.3563];

export default function Maps() {
  const markers = [
    {
      geocode: [23.8223, 90.3654],
      popUp: "Hello, Mirpur dhaka",
    },
    {
      geocode: [23.7461, 90.3742],
      popUp: "Hello, Dhanmondi dhaka",
    },
    {
      geocode: [23.733, 90.4172],
      popUp: "Hello, Motijheel dhaka",
    },
  ];

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/819/819814.png",
    iconSize: [38, 38],
  });

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      className="h-screen"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker) => (
        <Marker position={marker.geocode} icon={customIcon}></Marker>
      ))}
    </MapContainer>
  );
}
