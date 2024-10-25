import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@mantine/core/styles.css";
import MantineWrapper from "./components/Layout/Wrapper/MantineWrapper/index.tsx";
import RTKWrapper from "./components/Layout/Wrapper/RTKWrapper/index.tsx";
import GlobalContainer from "./components/Layout/Wrapper/GlobalContainer/index.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routerCollection from "./router./index.tsx";

const router = createBrowserRouter(routerCollection);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RTKWrapper>
      <MantineWrapper>
        <GlobalContainer>
          {/* <App /> */}
          <RouterProvider router={router} />
        </GlobalContainer>
      </MantineWrapper>
    </RTKWrapper>
  </StrictMode>
);
