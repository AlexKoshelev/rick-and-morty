import Nav from "./components/ui/nav";
import routes from "./routes";
import { useRoutes } from "react-router-dom";

function App() {
  const elements = useRoutes(routes());
  return (
    <main>
      <Nav />
      <div className="_container">{elements}</div>
    </main>
  );
}

export default App;
