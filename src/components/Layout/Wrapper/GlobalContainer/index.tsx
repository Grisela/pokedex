import { Container } from "@mantine/core";
import React from "react";

const GlobalContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container size={"lg"} mih={"80vh"}>
      {children}
    </Container>
  );
};

export default GlobalContainer;
