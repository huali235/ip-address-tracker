import { LocationType } from "../contexts/LocationContext";

const API_KEY = "0125bbf88610331550d985c260e19827";

export async function trackIpAddress(
  ipAddress: string,
  setLocation: (value: LocationType) => void
) {
  try {
    const res = await fetch(
      `http://api.ipstack.com/${ipAddress}?access_key=${API_KEY}`
    );
    const data = await res.json();
    console.log(data);
    setLocation({
      city: data.city,
      state: data.region_code,
      zipcode: data.zip,
      country: data.country_name,
      region: data.region_name,
      lat: data.latitude,
      long: data.longitude,
      countryEmoji: data.location.country_flag_emoji,
    });
  } catch (error) {
    console.error("Error tracking IP Address");
  }
}
