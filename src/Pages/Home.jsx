import React from "react";
import { Link } from "react-router-dom";
import Memo from "../Img/Memo/memo.png";
import Asked from "../Img/asked.png";
import Stonepaperscissors from "../Img/rock-paper-scissors/rock-paper-scissors.png";
export const Home = () => {
  return (
    <div className="container-home">
      <div className="container-info">
        <h3 className="info-home-title">¡¡ Bienvenidos !!</h3>
        <div className="container-info-home">
          <p className="info-home">
            Juegos creados con react para poner en practica los conocimientos de
            Javascript y React
          </p>
        </div>
        <div className="container-card-games">
          <Link to="/asked" className="card-game">
            Adiviná! <img className="card-img-options" src={Asked} alt="Adivina" />
          </Link>
          <Link to="/memo" className="card-game">
            Memo <img className="card-img-options" src={Memo} alt="memoria" />
          </Link>
          <Link to="/stonepaperscissors" className="card-game">
            Piedra, Papel o Tijeta! <img className="card-img-options" src={Stonepaperscissors} alt="Piedra Papel o Tijera" />
          </Link>
        </div>
      </div>
    </div>
  );
};
