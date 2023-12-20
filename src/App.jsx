import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import AppLayout from "./pages/AppLayout";
import { LocationProvider } from "./contexts/LocationContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/app",
    element: <AppLayout />,
  },
]);

function App() {
  return (
    <LocationProvider>
      <RouterProvider router={router} />
    </LocationProvider>
  );
}

export default App;
