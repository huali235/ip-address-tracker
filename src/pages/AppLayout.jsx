import { useContext } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { LocationContext } from "../contexts/LocationContext";
import "leaflet/dist/leaflet.css";
import "../index.css";

function AppLayout() {
  const { location } = useContext(LocationContext);
  return (
    <div className="flex-1 h-screen relative">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default AppLayout;
