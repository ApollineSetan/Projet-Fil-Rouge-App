import React from "react";
import "../Styles/SectionDefault.css";
import { MusicCard } from "./MusicCard";

function SectionDefault() {
  return (
    <div className="sectionDefault">
      <h1>Démos sans section</h1>
      <MusicCard />
    </div>
  );
}

export { SectionDefault };
