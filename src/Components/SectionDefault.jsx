import React from "react";
import "../Styles/SectionDefault.css";
import { MusicCard } from "./MusicCard";

function SectionDefault({ demos, deleteDemo }) {
  if (!demos || demos.length === 0) {
    return (
      <div className="sectionDefault">
        <h1>Aucune démo n'a été ajoutée pour le moment.</h1>
      </div>
    );
  }

  return (
    <div className="sectionDefault">
      <h1>Section par défaut</h1>
      <div className="musicCardGrid">
        {demos.map((demo, index) => {
          return (
            <MusicCard
              key={demo.id} // Utilise l'id ici pour la clé
              demo={demo}
              deleteDemo={deleteDemo} // Passer deleteDemo
            />
          );
        })}
      </div>
    </div>
  );
}

export { SectionDefault };
