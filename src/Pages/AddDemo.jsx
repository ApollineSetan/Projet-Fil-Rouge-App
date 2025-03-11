import React, { useState } from "react";
import "../Styles/AddDemo.css";
import { TopBar } from "../Components/TopBar";
import { MdOutlineLink } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaImages } from "react-icons/fa";
import { useDemoContext } from "../Contexts/DemoContext"; // Importer le contexte

function AddDemo() {
  const [title, setTitle] = useState(""); // Titre de la démo
  const [description, setDescription] = useState(""); // Description (facultatif)
  const [file, setFile] = useState(null); // Fichier de la démo (obligatoire)
  const [image, setImage] = useState(null); // Image d'illustration (facultatif)
  const { addDemo } = useDemoContext(); // Utiliser addDemo du contexte pour ajouter la démo
  const navigate = useNavigate();

  // Fonction handleSubmit pour ajouter la démo
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title || !file) {
      alert("Le titre et le fichier sont obligatoires !");
      return;
    }

    // Vérifier l'extension du fichier pour s'assurer qu'il a un format valide
    const validExtensions = [
      "mp3",
      "flac",
      "wav",
      "aac",
      "ogg",
      "aiff",
      "m4a",
      "wma",
    ];
    const fileExtension = file.name.split(".").pop().toLowerCase(); // Récupère l'extension du fichier en minuscule

    if (!validExtensions.includes(fileExtension)) {
      alert(
        "Format de fichier audio invalide ! Veuillez télécharger un fichier MP3, FLAC, WAV, AAC, OGG, AIFF, M4A ou WMA."
      );
      return;
    }

    // Vérifier le type MIME si nécessaire
    const validFormats = [
      "audio/mpeg", // MP3
      "audio/wav",
      "audio/flac",
      "audio/aac",
      "audio/ogg",
      "audio/aiff",
      "audio/x-m4a",
      "audio/x-ms-wma",
    ];

    if (!validFormats.includes(file.type)) {
      alert(
        "Format de fichier audio invalide ! Veuillez télécharger un fichier MP3, FLAC, WAV, AAC, OGG, AIFF, M4A ou WMA."
      );
      return;
    }

    // Récupérer la durée du fichier audio
    const audio = new Audio(URL.createObjectURL(file));
    audio.onloadedmetadata = () => {
      const duration = audio.duration; // Durée en secondes
      if (duration > 3600) {
        // 1h = 3600 secondes
        alert("La durée du fichier audio ne doit pas dépasser 1 heure.");
        return;
      }

      // Formater la durée
      const minutes = Math.floor(duration / 60);
      const seconds = Math.floor(duration % 60);
      const formattedDuration = `${minutes}:${
        seconds < 10 ? "0" + seconds : seconds
      }`;

      // Créer l'objet demo à ajouter
      const demo = {
        title,
        description,
        file,
        image,
        duration: formattedDuration,
      };

      // Ajouter la démo au contexte
      addDemo(demo);

      // Optionnel : réinitialiser les champs après soumission
      setTitle("");
      setDescription("");
      setFile(null);
      setImage(null);

      console.log("Démo ajoutée :", demo);
      navigate("/");
    };
  };

  // Fonction pour déclencher l'input de fichier audio
  const handleAudioClick = () => {
    document.getElementById("audioFile").click(); // Simuler un clic sur l'input
  };

  // Fonction pour déclencher l'input de fichier image
  const handleImageClick = () => {
    document.getElementById("imageFile").click(); // Simuler un clic sur l'input
  };

  return (
    <div className="mainContainer">
      <TopBar />
      <div className="title">
        <p>Ajouter une nouvelle démo audio</p>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="firstContainer">
          <div className="addTitle">
            <input
              type="text"
              placeholder="Ajouter un titre..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="addSection">
            <select>
              <option value="">Ranger dans une section</option>
              {/* Ajoute des options ici */}
            </select>
          </div>
        </div>
        <div className="secondContainer">
          <textarea
            placeholder="Ajouter une description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="thirdContainer">
          <div className="addFile">
            {/* Bouton personnalisé pour le fichier audio */}
            <button type="button" onClick={handleAudioClick}>
              Ajouter un fichier audio
              <MdOutlineLink />
            </button>
            <input
              type="file"
              id="audioFile"
              style={{ display: "none" }} // Caché
              accept="audio/mp3, audio/wav, audio/flac, audio/aac, audio/ogg, audio/aiff, audio/m4a, audio/wma"
              onChange={(e) => setFile(e.target.files[0])}
              required
            />
          </div>
          <div className="addImage">
            {/* Bouton personnalisé pour l'image */}
            <button type="button" onClick={handleImageClick}>
              Choisir une image
              <FaImages />
            </button>
            <input
              type="file"
              id="imageFile"
              style={{ display: "none" }} // Caché
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div className="submit">
            <button type="submit">Valider</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export { AddDemo };
