import { useContext } from "react";
import {
  Circle,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
} from "react-leaflet";
import { LocationContext } from "./contexts/LocationContext";

function Map() {
  const { location } = useContext(LocationContext);
  const { lat, long } = location;
  return (
    <MapContainer
      center={[lat, long - 0.04]}
      zoom={13}
      scrollWheelZoom={true}
      className="w-full h-full z-0"
      zoomControl={false}
    >
      <ZoomControl position="topright" />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
        maxZoom={20}
        subdomains={["mt0", "mt1", "mt2", "mt3"]}
      />
      <Marker position={[lat, long]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Circle center={[lat, long]} radius={1500} />
    </MapContainer>
  );
}

export default Map;
