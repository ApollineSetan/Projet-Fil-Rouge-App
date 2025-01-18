import React, { useState } from "react";
import "../Styles/LeftMenu.css";
import { SiApplemusic } from "react-icons/si";
import logoImage from "../assets/logoImage.png";

// Components
import { Menu } from "./Menu";
import { MenuList } from "./MenuList";

function LeftMenu() {
  // Création d'un état pour suivre l'élément de menu actif
  const [activeIndex, setActiveIndex] = useState(null);

  // Fonction pour gérer le clic sur un élément de menu
  const handleMenuClick = (index) => {
    setActiveIndex(index); // Met à jour l'index actif
  };

  return (
    <div className="leftMenu">
      <div className="logoContainer">
        <i>
          <img src={logoImage} alt="Logo" className="logoImage" />
        </i>
      </div>

      {/* Passer activeIndex et handleMenuClick aux deux menus */}
      <Menu
        menuObject={MenuList.slice(0, 6)}
        className="primaryMenu"
        activeIndex={activeIndex}
        onMenuClick={handleMenuClick}
      />

      <Menu
        menuObject={MenuList.slice(6, 9)}
        className="secondaryMenu"
        activeIndex={activeIndex}
        onMenuClick={handleMenuClick}
      />
    </div>
  );
}

export { LeftMenu };
