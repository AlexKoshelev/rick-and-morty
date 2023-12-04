import Episode from "./components/pages/episode";
import Episodes from "./components/pages/episodes";
import Hero from "./components/pages/hero";
import Heroes from "./components/pages/heroes";

import Home from "./components/pages/home";
import Location from "./components/pages/location";
import Locations from "./components/pages/locations";
import Login from "./components/pages/login";
import NotFound from "./components/pages/not-found";
import { PrivateRoute } from "./context/private-route";

const routes = () => [
  { path: "", element: <Home /> },
  { path: "login", element: <Login /> },

  {
    path: "locations",
    element: (
      <PrivateRoute>
        <Locations />{" "}
      </PrivateRoute>
    ),
  },
  {
    path: "locations/:id",
    element: (
      <PrivateRoute>
        <Location />
      </PrivateRoute>
    ),
  },
  {
    path: "heroes",
    element: (
      <PrivateRoute>
        <Heroes />
      </PrivateRoute>
    ),
  },
  {
    path: "heroes/:id",
    element: (
      <PrivateRoute>
        <Hero />{" "}
      </PrivateRoute>
    ),
  },
  {
    path: "episodes",
    element: (
      <PrivateRoute>
        <Episodes />{" "}
      </PrivateRoute>
    ),
  },
  {
    path: "episodes/:id",
    element: (
      <PrivateRoute>
        <Episode />
      </PrivateRoute>
    ),
  },
  { path: "*", element: <NotFound /> },
];
export default routes;
