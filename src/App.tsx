import { lazy, Suspense } from "react";
import "./App.css";
const HomeComponent = lazy(() => import("./views/Home"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeComponent />
    </Suspense>
  );
}

export default App;
