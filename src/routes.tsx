import { lazy } from "react";
import { PrivateRoute } from "./context/private-route";
import ErrorBoundary from "./hoc/error-boundary";
const Home = lazy(() => import("./components/pages/home"));
const Hero = lazy(() => import("./components/pages/hero"));
const Heroes = lazy(() => import("./components/pages/heroes"));
const Location = lazy(() => import("./components/pages/location"));
const Locations = lazy(() => import("./components/pages/locations"));
const Login = lazy(() => import("./components/pages/login"));
const Episode = lazy(() => import("./components/pages/episode"));
const Episodes = lazy(() => import("./components/pages/episodes"));
const NotFound = lazy(() => import("./components/pages/not-found"));
const routes = () => [
  { path: "", element: <Home /> },
  {
    path: "login",
    element: (
      <ErrorBoundary>
        <Login />
      </ErrorBoundary>
    ),
  },

  {
    path: "locations",
    element: (
      <ErrorBoundary>
        <PrivateRoute>
          <Locations />{" "}
        </PrivateRoute>
      </ErrorBoundary>
    ),
  },
  {
    path: "locations/:id",
    element: (
      <ErrorBoundary>
        <PrivateRoute>
          <Location />
        </PrivateRoute>
      </ErrorBoundary>
    ),
  },
  {
    path: "heroes",
    element: (
      <ErrorBoundary>
        <PrivateRoute>
          <Heroes />
        </PrivateRoute>
      </ErrorBoundary>
    ),
  },
  {
    path: "heroes/:id",
    element: (
      <ErrorBoundary>
        <PrivateRoute>
          <Hero />
        </PrivateRoute>
      </ErrorBoundary>
    ),
  },
  {
    path: "episodes",
    element: (
      <ErrorBoundary>
        <PrivateRoute>
          <Episodes />{" "}
        </PrivateRoute>
      </ErrorBoundary>
    ),
  },
  {
    path: "episodes/:id",
    element: (
      <ErrorBoundary>
        <PrivateRoute>
          <Episode />
        </PrivateRoute>
      </ErrorBoundary>
    ),
  },
  { path: "*", element: <NotFound /> },
];
export default routes;
