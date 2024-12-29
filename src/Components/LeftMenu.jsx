import React from "react";
import "../Styles/LeftMenu.css";
import { SiApplemusic } from "react-icons/si";
import { Menu } from "./Menu";
import { MenuList } from "./MenuList";

function LeftMenu() {
  return (
    <div className="leftMenu">
      <div className="logoContainer">
        <i>
          <SiApplemusic />
        </i>
        <h2>Let's Jam</h2>
      </div>

      <Menu menuObject={MenuList} />
    </div>
  );
}

export { LeftMenu };
