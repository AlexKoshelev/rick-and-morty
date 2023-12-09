import { Suspense } from "react";
import Nav from "./components/ui/nav";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import Loading from "./components/common/loading.tsx";
function App() {
  const elements = useRoutes(routes());
  return (
    <main>
      <Nav />
      <Suspense fallback={<Loading />}>
        <div className="_container">{elements}</div>
      </Suspense>
    </main>
  );
}

export default App;
