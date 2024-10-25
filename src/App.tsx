import { lazy, Suspense } from "react";
import "./App.css";
import { Center } from "@mantine/core";
import ClassicLoading from "./components/Widget/loader/ClassicLoading";
const HomeComponent = lazy(() => import("./views/Home"));

function App() {
  return (
    <Suspense
      fallback={
        <Center mih={"100vh"}>
          <ClassicLoading />
        </Center>
      }
    >
      <HomeComponent />
    </Suspense>
  );
}

export default App;
