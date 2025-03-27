import React, { useState, useEffect } from "react";
import "../Styles/EditionPage.css";
import { TopBar } from "../Components/TopBar";
import { SectionDefault } from "../Components/SectionDefault";
import { Section } from "../Components/Section";
import { Link } from "react-router-dom";
import { MdOutlineLink } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { useDemoContext } from "../Contexts/DemoContext"; // Importer le contexte

function EditionPage() {
  const { demos, deleteDemo, addSection, sections } = useDemoContext(); // Utiliser le contexte pour récupérer les démos et la fonction deleteDemo
  const [newSectionName, setNewSectionName] = useState(""); // État local pour le nom de la nouvelle section
  const [showInput, setShowInput] = useState(false); // État pour gérer l'affichage de l'input

  const handleAddSection = () => {
    if (newSectionName) {
      addSection(newSectionName);
      setNewSectionName(""); // Réinitialiser le champ de saisie
      setShowInput(false); // Cacher l'input après l'ajout de la section
    }
  };

  const handleToggleInput = () => {
    setShowInput(!showInput); // Toggle pour afficher/masquer l'input
  };

  const handleKeyDown = (event) => {
    // Vérifier si l'utilisateur appuie sur la touche "Entrée" (keyCode 13 ou "Enter")
    if (event.key === "Enter") {
      handleAddSection(); // Valider l'ajout de la section
    }
  };

  useEffect(() => {
    console.log("Démo(s) ajoutée(s):", demos);
  }, [demos]);

  const isAnyDemoPresent =
    demos.length > 0 || sections.some((section) => section.demos?.length > 0);

  return (
    <div className="mainContainer">
      <TopBar />
      <div className="buttonsContainer">
        <div className="addDemoButton">
          <Link to="/add-demo">Ajouter une nouvelle démo</Link>
          <a href="#">
            <i>
              <MdOutlineLink />
            </i>
          </a>
        </div>
        <div className="addSectionDemo">
          <a href="#" onClick={handleToggleInput}>
            Ajouter une nouvelle section
            <i>
              <IoIosAddCircle />
            </i>
          </a>
        </div>
      </div>

      {/* Afficher l'input si showInput est vrai */}
      {showInput && (
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Nom de la nouvelle section"
            value={newSectionName}
            onChange={(e) => setNewSectionName(e.target.value)}
            onKeyDown={handleKeyDown} // Capturer l'événement "Entrée"
            className="transparentInput" // Ajout d'une classe pour cibler cet input
          />
        </div>
      )}
      <div className="sectionsDefault">
        {!isAnyDemoPresent && (
          <h1>Aucune démo n'a été ajoutée pour le moment.</h1>
        )}

        {/* Passer la fonction deleteDemo comme prop à SectionDefault */}
        <SectionDefault demos={demos} deleteDemo={deleteDemo} />

        {/* Afficher les sections personnalisées */}
        {sections.map((section) => (
          <Section
            key={section.id}
            demos={demos}
            sectionId={section.id} // Passer l'ID de la section
          />
        ))}
      </div>
    </div>
  );
}

export { EditionPage };
