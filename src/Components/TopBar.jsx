import React from "react";
import "../Styles/TopBar.css";
import { BiSearchAlt, BiSolidBell } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";

function TopBar() {
  return (
    <div className="containerTopBar">
      <button className="returnButton">
        <i className="return">
          <IoIosArrowBack />
        </i>
      </button>
      <div className="searchBox">
        <input type="text" placeholder="Rechercher..." />
        <i className="searchIcon">
          <BiSearchAlt />
        </i>
      </div>
      <button className="notificationButton">
        <i className="notification">
          <BiSolidBell />
        </i>
      </button>
    </div>
  );
}

export { TopBar };
