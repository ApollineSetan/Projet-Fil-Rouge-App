import React from "react";
import "../Styles/MainContainer.css";
import { TopBar } from "./TopBar";
// import { Section } from "./Section";
// import { SectionDefault } from "./SectionDefault";
// import { Link } from "react-router-dom";

function MainContainer() {
  return (
    <div className="mainContainer">
      <TopBar />
    </div>
  );
}

export { MainContainer };
