import { createContext, useState } from "react";

interface LocationProviderProps {
  children?: React.ReactNode;
}

interface LocationContextType {
  ipAddress: string;
  setIpAddress: (value: string) => void;
  location: object;
  setLocation: (value: LocationType) => void;
}

export type LocationType = {
  city: string;
  state: string;
  zipcode: string;
  country: string;
  region: string;
  lat: number;
  long: number;
  countryEmoji: string;
};

const LocationContext = createContext<LocationContextType>({
  ipAddress: "",
  setIpAddress: () => {},
  location: {},
  setLocation: () => {},
});

function LocationProvider({ children }: LocationProviderProps) {
  const [ipAddress, setIpAddress] = useState("");
  const [location, setLocation] = useState<LocationType>({
    city: "",
    state: "",
    zipcode: "",
    country: "",
    region: "",
    lat: 0,
    long: 0,
    countryEmoji: "",
  });
  return (
    <LocationContext.Provider
      value={{ ipAddress, setIpAddress, location, setLocation }}
    >
      {children}
    </LocationContext.Provider>
  );
}

export { LocationContext, LocationProvider };
