import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import L from "leaflet";
const initialPosition = [23.685, 90.3563];

const ResetCenterView = ({ selectLocation }) => {
  const map = useMap();
  useEffect(() => {
    if (selectLocation) {
      map.setView(
        L.latLng(selectLocation?.latitude, selectLocation?.longitude),
        map.getZoom(),
        {
          animate: true,
        }
      );
    }
  }, [selectLocation]);

  return null;
};
export default function Maps({ selectLocation }) {
  const markers = [
    {
      geocode: [selectLocation?.latitude, selectLocation?.longitude],
      popUp: "Hello, Mirpur dhaka",
    },
  ];
  console.log(markers.geocode);

  const customIcon = new Icon({
    iconUrl: require("../img/red-marker.png"),
    iconSize: [38, 38],
  });

  return (
    <MapContainer
      center={initialPosition}
      zoom={13}
      scrollWheelZoom={true}
      className="h-screen"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=ASrfqapsZfy4BRFJJdVy"
      />

      {selectLocation &&
        markers.map((marker) => (
          <Marker position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}

      <ResetCenterView selectLocation={selectLocation}></ResetCenterView>
    </MapContainer>
  );
}
