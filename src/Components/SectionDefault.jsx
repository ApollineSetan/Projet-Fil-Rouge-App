import React from "react";
import "../Styles/SectionDefault.css";
import { MusicCard } from "./MusicCard";

function SectionDefault() {
  return (
    <div className="sectionDefault">
      <h1>Section par défaut</h1>
      <MusicCard />
    </div>
  );
}

export { SectionDefault };
