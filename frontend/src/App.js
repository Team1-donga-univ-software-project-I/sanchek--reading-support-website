import { Reset } from "styled-reset";
import { MainRouters } from "./routers/router";
import "./assets/fonts/FontStyles.css";

export const App = () => {
  return (
    <>
      <Reset />
      <MainRouters />
    </>
  );
};

export default App;
