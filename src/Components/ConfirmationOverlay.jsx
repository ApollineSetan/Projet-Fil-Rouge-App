import React from "react";
import "../Styles/ConfirmationOverlay.css"; // Le fichier CSS pour le style

function ConfirmationOverlay({ onCancel, onConfirm, demoTitle }) {
  return (
    <div className="overlay">
      <div className="confirmationBox">
        <h3>Êtes-vous sûr de vouloir supprimer cette démo ? </h3>
        <p>
          Cette action est irréversible et entraînera la suppression définitive
          de "<strong>{demoTitle}</strong>".
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

export { ConfirmationOverlay };
