import React from "react";
import "./App.css";
import { LeftMenu } from "./Components/LeftMenu";
import { TopBar } from "./Components/TopBar";
import { MainContainer } from "./Components/MainContainer";

function App() {
  return (
    <div className="App">
      <LeftMenu />
      <TopBar />
      <MainContainer />

      <div className="background"></div>
    </div>
  );
}

export default App;
