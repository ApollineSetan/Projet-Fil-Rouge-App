import React, { useState } from "react"; // Assurez-vous d'importer useState
import { ConfirmationOverlay } from './ConfirmationOverlay'; // Importer ton overlay
import "../Styles/MusicCard.css";
import iconeplay from "../assets/iconeplay.png";
import { TbTrash, TbDotsVertical } from "react-icons/tb";

function MusicCard({ demo, deleteDemo }) { // Accepter deleteDemo comme prop
  const { id, title, duration, image } = demo; // Assurez-vous d'extraire l'ID de la démo
  const [isOverlayVisible, setOverlayVisible] = useState(false); // État pour contrôler l'affichage de l'overlay

  // Si une image est présente, créer une URL d'image pour l'utiliser comme fond
  const backgroundImage = image ? `url(${URL.createObjectURL(image)})` : null;

  // Applique le style en ligne pour définir l'image de fond
  const style = backgroundImage
    ? {
        backgroundImage: backgroundImage, // Ajoute l'image en fond
        backgroundSize: "cover", // Couvre toute la carte
        backgroundPosition: "center", // Centre l'image
        backgroundRepeat: "no-repeat", // Empêche la répétition de l'image
      }
    : {};

  const handlePlayClick = () => {
    console.log("Lecture de la musique : ", title);
  };

  const handleDeleteClick = () => {
    // Afficher l'overlay de confirmation
    setOverlayVisible(true);
  };

  const handleCancel = () => {
    // Fermer l'overlay sans supprimer
    setOverlayVisible(false);
  };

  const handleConfirmDelete = () => {
    // Appeler deleteDemo pour supprimer la démo par son id
    console.log('Suppression de la démo avec id: ', demo.id);
    deleteDemo(demo.id);
    setOverlayVisible(false); // Fermer l'overlay après la suppression
  };

  return (
    <div className="musicCardContainer" style={style}>
      {/* Affichage de l'overlay si l'état est activé */}
      {isOverlayVisible && (
        <ConfirmationOverlay
          demoTitle={title} 
          onCancel={handleCancel} 
          onConfirm={handleConfirmDelete}
        />
      )}

      <div className="iconsMusicCard">
        <i>
          {/* Quand on clique sur l'icône Trash, on appelle handleDeleteClick */}
          <TbTrash onClick={handleDeleteClick} />
          <TbDotsVertical />
        </i>
      </div>
      <div className="iconPlay" onClick={handlePlayClick}>
        <img src={iconeplay} alt="iconeplay" />
      </div>
      <div className="infoMusic">
        <p className="songName">{title}</p>
        <span className="durationMusic">{duration}</span>
      </div>
    </div>
  );
}

export { MusicCard };
