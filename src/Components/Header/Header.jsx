import React from "react";
import { Link } from "react-router-dom";
import "../../css/Header.css";

export const Header = () => {
  return (
    <header className="container-header">
      <h1><Link className="home-header" to="/">Games</Link></h1>
      <div className="menu-header">
        <Link to="/Asked">Asked</Link>
        <Link to="/Memo">Memo</Link>
      </div>
    </header>
  );
};
