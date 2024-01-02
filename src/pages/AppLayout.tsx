import "leaflet/dist/leaflet.css";
import "../index.css";
import LocationInfo from "../LocationInfo";
import Map from "../Map";

function AppLayout() {
  return (
    <div className="relative mt-auto">
      <LocationInfo />
      <div className="h-screen">
        <Map />
      </div>
    </div>
  );
}

export default AppLayout;
