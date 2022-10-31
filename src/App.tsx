import React from "react";
import { Reset } from "styled-reset";
import "./assets/fonts/FontStyles.css";
import { MainRouters } from "./routers/router";

export const App = () => {
  return (
    <>
      <Reset />
      <MainRouters />
    </>
  );
};

export default App;
