import Episode from "./components/pages/episode";
import Episodes from "./components/pages/episodes";
import Hero from "./components/pages/hero";
import Heroes from "./components/pages/heroes";

import Home from "./components/pages/home";
import Location from "./components/pages/location";
import Locations from "./components/pages/locations";
import NotFound from "./components/pages/not-found";

const routes = () => [
  { path: "", element: <Home /> },
  { path: "locations", element: <Locations /> },
  { path: "locations/:id", element: <Location /> },
  {
    path: "heroes",
    element: <Heroes />,
  },
  { path: "heroes/:id", element: <Hero /> },
  { path: "episodes", element: <Episodes /> },
  { path: "episodes/:id", element: <Episode /> },
  { path: "*", element: <NotFound /> },
];
export default routes;
