// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";

ReactDOM.render(
  <ChakraProvider>
    <CSSReset />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById("root")
);
