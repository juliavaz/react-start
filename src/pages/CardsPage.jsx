import React from "react";
import Box from "../components/Box";

import { Container } from "react-bootstrap";

const InitialPage = () => {
  return (
    <div>
      <Container>
        <Box header="Card 1" title="Titulo 1">
          <p>Descrição bla bla bla</p>
        </Box>

        <Box header="Card 2" title="Titulo 2" variantBorder="success" />
      </Container>
    </div>
  );
};

export default InitialPage;
