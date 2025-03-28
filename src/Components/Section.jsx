import React, { useState } from "react";
import "../Styles/Section.css";
import { MusicCard } from "./MusicCard"; // Importation de MusicCard
import { useDemoContext } from "../Contexts/DemoContext";
import { TbTrash } from "react-icons/tb"; // Icône de suppression
import { SectionConfirmationOverlay } from "./SectionConfirmationOverlay"; // Importer l'overlay

function Section({ demos, sectionId }) {
  const { deleteDemo, sections, deleteSection, moveDemosToDefault } =
    useDemoContext();
  const [isOverlayVisible, setOverlayVisible] = useState(false); // Nouvel état pour l'overlay
  const section = sections.find((sec) => sec.id === sectionId);

  if (!section) {
    return <p>Aucune section sélectionnée.</p>;
  }

  const handleDeleteSection = () => {
    setOverlayVisible(true); // Afficher l'overlay pour confirmer la suppression
  };

  const handleCancel = () => {
    setOverlayVisible(false); // Cacher l'overlay si l'utilisateur annule
  };

  const handleConfirmDelete = () => {
    moveDemosToDefault(section.id); // Déplacer les démos de la section vers la SectionDefault
    deleteSection(section.id); // Supprimer la section
    setOverlayVisible(false); // Cacher l'overlay après suppression
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

      {/* Affichage de l'overlay ici */}
      {isOverlayVisible && (
        <SectionConfirmationOverlay
          sectionTitle={section.name} // Remplacer "demoTitle" par le nom de la section
          onCancel={handleCancel} // Annulation de la suppression
          onConfirm={handleConfirmDelete} // Confirmation de la suppression
        />
      )}
    </div>
  );
}

export { Section };
