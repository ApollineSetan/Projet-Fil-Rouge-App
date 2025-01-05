import React from "react";
import "../Styles/MusicCard.css";
import iconeplay from "../assets/iconeplay.png";

import { TbTrash } from "react-icons/tb";
import { TbDotsVertical } from "react-icons/tb";

function MusicCard() {
  return (
    <div className="musicCardContainer">
      <div className="iconsMusicCard">
        <i>
          <TbTrash />
          <TbDotsVertical />
        </i>
      </div>
      <div className="iconPlay">
        <img src={iconeplay} alt="iconeplay" />
      </div>
      <div className="infoMusic">
        <p className="songName">
          Dazed and Confused
          <span className="durationMusic">03:15</span>
        </p>
      </div>
    </div>
  );
}

export { MusicCard };
