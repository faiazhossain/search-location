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
export default function Maps({ selectLocation, theme }) {
  const markers = [
    {
      geocode: [selectLocation?.latitude, selectLocation?.longitude],
      popUp: selectLocation?.address,
    },
  ];

  const customIconRed = new Icon({
    iconUrl: require("../img/red-marker.png"),
    iconSize: [42, 42],
  });
  const customIconGreen = new Icon({
    iconUrl: require("../img/green-marker.png"),
    iconSize: [42, 42],
  });

  const markerColor =
    selectLocation?.pType === "Admin" ? customIconGreen : customIconRed;
  return (
    <MapContainer
      center={initialPosition}
      zoom={13}
      scrollWheelZoom={true}
      className="h-screen"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={
          theme === "light"
            ? "https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=ASrfqapsZfy4BRFJJdVy"
            : "https://api.maptiler.com/maps/hybrid/256/{z}/{x}/{y}.jpg?key=ASrfqapsZfy4BRFJJdVy"
        }
      />

      {selectLocation &&
        markers.map((marker) => (
          <Marker position={marker.geocode} icon={markerColor}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}

      <ResetCenterView selectLocation={selectLocation}></ResetCenterView>
    </MapContainer>
  );
}
