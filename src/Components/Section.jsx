import React from "react";
import "../Styles/Section.css";
import { MusicCard } from "./MusicCard"; // Importation de MusicCard
import { useDemoContext } from "../Contexts/DemoContext";

function Section({ demos, sectionId }) {
  const { deleteDemo, sections } = useDemoContext();

  const section = sections.find((sec) => sec.id === sectionId);

  if (!section) {
    return <p>Aucune section sélectionnée.</p>;
  }

  return (
    <div className="sectionContainer">
      <h1>{section.name}</h1>
      <div className="musicCardGrid">
        {demos
          .filter((demo) => demo.sectionId === section.id)
          .map((demo) => (
            <MusicCard key={demo.id} demo={demo} deleteDemo={deleteDemo} />
          ))}
      </div>
    </div>
  );
}

export { Section };
