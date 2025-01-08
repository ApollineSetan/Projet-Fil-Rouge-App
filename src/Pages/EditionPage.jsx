import React from "react";
import "../Styles/EditionPage.css";
import { TopBar } from "../Components/TopBar";
import { SectionDefault } from "../Components/SectionDefault";
import { Link } from "react-router-dom";

import { MdOutlineLink } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";

function EditionPage() {
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
      <div className="sectionDefault">
        <SectionDefault />
      </div>
    </div>
  );
}

export { EditionPage };
