import { useContext } from "react";
import Column from "./Column";
import { LocationContext, LocationType } from "./contexts/LocationContext";
import { IoIosGlobe } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { GiModernCity } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

function LocationInfo() {
  const { location, ipAddress } = useContext(LocationContext);
  const { city, zipcode, country, region, countryEmoji } =
    location as LocationType;
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }
  return (
    <div className="w-[600px] h-[600px] absolute top-10 left-10 z-10 bg-slate-50 rounded-md">
      <div className="flex items-center">
        <button
          className="px-4 py-0.5 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-200 ml-3 text-3xl"
          onClick={handleBack}
        >
          &larr;
        </button>
        <img
          src="src/assets/ip-address-tracker-high-resolution-logo-transparent.png"
          alt="ip address logo"
          className="w-29 h-20 mt-2 block mx-auto mb-5"
        />
      </div>
      <div className="grid grid-rows-4 gap-3">
        <Column heading="Your Ip" Icon={IoIosGlobe}>
          <span className="text-3xl">{ipAddress}</span>
        </Column>
        <Column heading="location" Icon={IoLocationOutline}>
          {region}, {country} {countryEmoji}
        </Column>
        <Column heading="City, zip" Icon={GiModernCity}>
          {city}, {zipcode}
        </Column>
      </div>
    </div>
  );
}

export default LocationInfo;
