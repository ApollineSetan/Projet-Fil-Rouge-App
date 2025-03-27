import React from "react";
import "../Styles/Section.css";
import { MusicCard } from "./MusicCard"; // Importation de MusicCard
import { useDemoContext } from "../Contexts/DemoContext";
import { TbTrash } from "react-icons/tb"; // Icône de suppression

function Section({ demos, sectionId }) {
  const { deleteDemo, sections, deleteSection, moveDemosToDefault } =
    useDemoContext();

  const section = sections.find((sec) => sec.id === sectionId);

  if (!section) {
    return <p>Aucune section sélectionnée.</p>;
  }

  const handleDeleteSection = () => {
    // Déplacer les demos de la section à supprimer vers la SectionDefault
    moveDemosToDefault(section.id);
    // Supprimer la section
    deleteSection(section.id);
  };

  return (
    <div className="sectionContainer">
      <div className="sectionHeader">
        <h1>{section.name}</h1>
        {/* Afficher l'icône de suppression uniquement pour les sections créées par l'utilisateur */}
        <TbTrash className="deleteIcon" onClick={handleDeleteSection} />
      </div>
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
