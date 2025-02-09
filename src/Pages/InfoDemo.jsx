import React, { useState, useEffect } from "react";
import { TopBar } from "../Components/TopBar";
import { useParams } from "react-router-dom";
import { useDemoContext } from "../Contexts/DemoContext"; // Utiliser le contexte pour accéder aux données des démos
import "../Styles/InfoDemo.css";

function InfoDemo() {
  const { demoId } = useParams(); // Récupérer l'ID de la démo depuis l'URL
  const { demos } = useDemoContext(); // Récupérer toutes les démos du contexte
  const demo = demos.find((demo) => demo.id === demoId); // Trouver la démo spécifique avec l'ID

  const [title, setTitle] = useState(demo?.title || "");
  const [description, setDescription] = useState(demo?.description || "");
  const [image, setImage] = useState(demo?.image || "");

  useEffect(() => {
    if (demo) {
      setTitle(demo.title);
      setDescription(demo.description);
      setImage(demo.image);
    }
  }, [demo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Traiter la soumission du formulaire et mettre à jour les données de la démo
    console.log("Nouvelle démo modifiée:", { title, description, image });
  };

  return (
    <div className="mainContainer">
      <TopBar />
      <h2>Modifier la démo</h2>
      {demo ? (
        <form onSubmit={handleSubmit}>
          <label>
            Titre :
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>

          <label>
            Description :
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>

          <label>
            Image :
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>

          <button type="submit">Enregistrer</button>
        </form>
      ) : (
        <p>Démo non trouvée</p>
      )}
    </div>
  );
}

export { InfoDemo };
