import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "react-dropdown/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CoinDataContextProvider from "./context/CoinDataContext/CoinDataContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CoinDataContextProvider>
      <App />
    </CoinDataContextProvider>
  </React.StrictMode>
);
