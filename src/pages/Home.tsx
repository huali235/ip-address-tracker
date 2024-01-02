import { useContext } from "react";
import { trackIpAddress } from "../utils/useTrackIpAddress";
import { useNavigate } from "react-router-dom";
import { LocationContext } from "../contexts/LocationContext";

function Home() {
  const { ipAddress, setIpAddress, setLocation } = useContext(LocationContext);
  const navigate = useNavigate();

  async function handleSubmit(event: React.MouseEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!ipAddress) return;
    await trackIpAddress(ipAddress, setLocation);

    navigate("/app");
  }

  return (
    <div>
      <h1 className="text-xl text-center">IP Address Tracker</h1>
      <form
        onSubmit={handleSubmit}
        className="text-center mt-4 flex flex-col items-center gap-2 "
      >
        <input
          type="text"
          value={ipAddress}
          placeholder="Search for any IP address or domain"
          onChange={(e) => setIpAddress(e.target.value)}
          className="w-96 border-2 border-gray-300 p-2 rounded-md"
        ></input>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
          type="submit"
        >
          GO
        </button>
      </form>
    </div>
  );
}

export default Home;
