import React from "react";
import { Link } from "react-router-dom";
import "../../css/Header.css";
import home from '../../Img/home.png'
export const Header = () => {
  return (
    <header className="container-header">
        <Link className="home-header" to="/">
          <img src={home} alt="Principal"  />
        </Link>
    </header>
  );
};
