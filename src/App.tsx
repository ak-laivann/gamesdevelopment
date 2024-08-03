import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { RootContainer } from "./cointainer/RootContainer";

function App() {
  return (
    <BrowserRouter>
      {(() => {
        return <RootContainer />;
      })()}
    </BrowserRouter>
  );
}

export default App;
