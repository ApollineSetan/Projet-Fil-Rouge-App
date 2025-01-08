import React from "react";
import "../Styles/AddDemo.css";
import { TopBar } from "../Components/TopBar";
import { MdOutlineLink } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FaImages } from "react-icons/fa";

function AddDemo() {
  return (
    <div className="mainContainer">
      <TopBar />
      <div className="title">
        <p>Ajouter une nouvelle démo audio</p>
      </div>
      <div className="form">
        <div className="firstContainer">
          <div className="addTitle">
            <a href="#">Ajouter un titre...</a>
          </div>
          <div className="addSection">
            <a href="#">Ranger dans une section</a>
            <a href="#">
              <i>
                <IoIosArrowDown />
              </i>
            </a>
          </div>
        </div>
        <div className="secondContainer">
          <a href="#">Ajouter une description...</a>
        </div>
        <div className="thirdContainer">
          <div className="addFile">
            <a href="#">Ajouter un fichier ou glisser-déposer</a>
            <a href="#">
              <i>
                <MdOutlineLink />
              </i>
            </a>
          </div>
          <div className="addImage">
            <a href="#">Ajouter une image d'illustration</a>
            <a href="#">
              <i>
                <FaImages />
              </i>
            </a>
          </div>
          <div className="submit">
            <a href="#">Valider</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export { AddDemo };
