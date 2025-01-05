import React from "react";
import "../Styles/MainContainer.css";
import { TopBar } from "./TopBar";
import { SectionDefault } from "./SectionDefault";

import { MdOutlineLink } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
// import { Section } from "./Section";
// import { Link } from "react-router-dom";

function MainContainer() {
  return (
    <div className="mainContainer">
      <TopBar />
      <div className="buttonsContainer">
        <div className="addDemoButton">
          <a href="#">Ajouter une nouvelle démo</a>
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

export { MainContainer };
