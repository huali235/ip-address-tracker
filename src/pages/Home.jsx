import { useEffect, useState } from "react";
import { trackIpAddress } from "../utils/useTrackIpAddress";
import { useNavigate } from "react-router-dom";

function Home() {
  const [ipAddress, setIpAddress] = useState("");
  const [location, setLocation] = useState({});
  const navigate = useNavigate();
  // useEffect(() => {
  //   console.log(location); // This will log whenever location changes
  // }, [location]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!ipAddress) return;
    await trackIpAddress(ipAddress, setLocation);

    navigate("/app");
  }

  return (
    <div>
      <h1>IP Address Tracker</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={ipAddress}
          placeholder="Search for any IP address or domain"
          onChange={(e) => setIpAddress(e.target.value)}
        ></input>
        <button type="submit">GO</button>
      </form>
    </div>
  );
}

export default Home;
