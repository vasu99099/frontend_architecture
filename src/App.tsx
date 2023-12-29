import React from "react";
import "./App.css";
import Router from "./routes";
import Providers from "./context/Providers";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/store";

function App() {
  return (
    <Providers>
      <PersistGate persistor={persistor}>
        <Router />
      </PersistGate>
    </Providers>
  );
}

export default App;
