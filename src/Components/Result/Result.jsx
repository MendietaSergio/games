import React from "react";

export const Result = ({ machineChoice, playerChoice }) => {
  console.log("machineChoice ", machineChoice);
  console.log("playerChoice ", playerChoice);
  let resultFinal;

  if (playerChoice.defeat === machineChoice.choice && playerChoice.choice) {
    resultFinal = (
      <h1>
        Ganador: <span className="result-title"> Jugador </span>
      </h1>
    );
  } else if (
    machineChoice.defeat === playerChoice.choice &&
    playerChoice.choice
  ) {
    resultFinal = <h1>
    Ganador: <span className="result-title"> Maquina </span>
  </h1>
  } else if (
    playerChoice.choice === machineChoice.choice &&
    playerChoice.choice
  ) {
    resultFinal = <h1>Empate</h1>;
  }

  return <h1 className="result-final">{resultFinal}</h1>;
};
