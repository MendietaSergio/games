import React from "react";
import { Link } from "react-router-dom";
import "../../css/Header.css";
import stonepaperscissors from "../../Img/rock-paper-scissors/rock-paper-scissors.png";
import memo from "../../Img/Memo/memo.png";
import asked from "../../Img/asked.png";
export const Header = () => {
  return (
    <header className="container-header">
      <h1>
        <Link className="home-header" to="/">
          Games
        </Link>
      </h1>
      <div className="menu-header">
        <Link to="/Asked">
          <img src={asked} alt="" />
        </Link>
        <Link to="/Memo">
          <img src={memo} alt="" />
        </Link>
        <Link to="/stonepaperscissors">
          <img src={stonepaperscissors} alt="" />
        </Link>
      </div>
    </header>
  );
};
