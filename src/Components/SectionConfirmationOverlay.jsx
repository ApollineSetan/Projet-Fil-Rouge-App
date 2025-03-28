import React from "react";
import "../Styles/ConfirmationOverlay.css"; // Le fichier CSS pour le style

function SectionConfirmationOverlay({ onCancel, onConfirm, sectionTitle }) {
  return (
    <div className="overlay">
      <div className="confirmationBox">
        <h3>Êtes-vous sûr de vouloir supprimer ?</h3>
        <p>
          Cette action est irréversible et entraînera la suppression définitive
          de "<strong>{sectionTitle}</strong>". Les démos ne seront pas
          impactées et seront déplacées dans la section par défault.
        </p>
        <div className="buttons">
          <button onClick={onCancel} className="cancelButton">
            Annuler
          </button>
          <button onClick={onConfirm} className="confirmButton">
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}

export { SectionConfirmationOverlay };
