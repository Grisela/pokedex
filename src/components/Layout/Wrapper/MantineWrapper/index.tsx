import { createTheme, MantineProvider } from "@mantine/core";
import React from "react";

const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "cyan",
});

const MantineWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      {children}
    </MantineProvider>
  );
};

export default MantineWrapper;
