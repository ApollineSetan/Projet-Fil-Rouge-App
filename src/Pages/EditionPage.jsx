import React, { useEffect } from "react";
import "../Styles/EditionPage.css";
import { TopBar } from "../Components/TopBar";
import { SectionDefault } from "../Components/SectionDefault";
import { Link } from "react-router-dom";
import { MdOutlineLink } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { useDemoContext } from "../Contexts/DemoContext"; // Importer le contexte

function EditionPage() {
  const { demos, deleteDemo } = useDemoContext(); // Utiliser le contexte pour récupérer les démos et la fonction deleteDemo

  useEffect(() => {
    console.log("Démo(s) ajoutée(s):", demos);
  }, [demos]);

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
          <a href="#">Ajouter une nouvelle section</a>
          <a href="#">
            <i>
              <IoIosAddCircle />
            </i>
          </a>
        </div>
      </div>

      {/* Passer la fonction deleteDemo comme prop à SectionDefault */}
      <SectionDefault demos={demos} deleteDemo={deleteDemo} />
    </div>
  );
}

export { EditionPage };
