import React from "react";
import "./App.css";
import { LeftMenu } from "./Components/LeftMenu";
import { EditionPage } from "./Pages/EditionPage";
import { AddDemo } from "./Pages/AddDemo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <LeftMenu />
        <Routes>
          <Route path="/" element={<EditionPage />} />
          <Route path="/add-demo" element={<AddDemo />} />
        </Routes>

        <div className="background"></div>
      </div>
    </Router>
  );
}

export default App;
