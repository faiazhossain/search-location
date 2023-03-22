import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
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
    iconUrl: require("../img/red-marker.png"),
    iconSize: [38, 38],
  });

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      className="h-screen"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=ASrfqapsZfy4BRFJJdVy"
      />
      <MarkerClusterGroup>
        {markers.map((marker) => (
          <Marker position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}
