import { createContext, useState } from "react";

const LocationContext = createContext();

function LocationProvider({ children }) {
  const [ipAddress, setIpAddress] = useState("");
  const [location, setLocation] = useState({});
  return (
    <LocationContext.Provider
      value={{ ipAddress, setIpAddress, location, setLocation }}
    >
      {children}
    </LocationContext.Provider>
  );
}

export { LocationContext, LocationProvider };
