import React from "react";
import { DemoProvider } from "./Contexts/DemoContext";
import "./App.css";
import { LeftMenu } from "./Components/LeftMenu";
import { EditionPage } from "./Pages/EditionPage";
import { AddDemo } from "./Pages/AddDemo";
import { InfoDemo } from "./Pages/InfoDemo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <DemoProvider>
      <Router>
        <div className="App">
          <LeftMenu />
          <Routes>
            <Route path="/" element={<EditionPage />} />
            <Route path="/add-demo" element={<AddDemo />} />
            <Route path="/edit-demo/:demoId" element={<InfoDemo />} />
          </Routes>

          <div className="background"></div>
        </div>
      </Router>
    </DemoProvider>
  );
}

export default App;
