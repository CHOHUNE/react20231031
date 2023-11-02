import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakrProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakrProvider>
      <App />
    </ChakrProvider>
  </React.StrictMode>,
);
