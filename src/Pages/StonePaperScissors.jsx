import React, { useState, useEffect } from "react";
import { Option } from "../Components/Option/Option";
import { Result } from "../Components/Result/Result";
import rock from '../Img/rock-paper-scissors/rock.png'
import paper from '../Img/rock-paper-scissors/paper.png'
import scissors from '../Img/rock-paper-scissors/scissors.png'
import '../css/StonePaperScissors.css'
export const StonePaperScissors = () => {
  const [playerChoice, setPlayerChoice] = useState({});
  const [machineChoice, setMachineChoice] = useState({});

  const options = [
    {
      choice: "piedra",
      defeat: "tijera",
      img: rock
    },
    {
      choice: "papel",
      defeat: "piedra",
      img: paper
    },
    {
      choice: "tijera",
      defeat: "papel",
      img: scissors
    },
  ];
  const selectOptions = (event) => {
      console.log(event);
    const player = options.find((e) => e.choice === event.target.alt);
    setPlayerChoice(player);
    rivalChoice();
  };

  const rivalChoice = () => {
    const choice = options[Math.floor(Math.random() * options.length)];
    setMachineChoice(choice);
  };

  return (
    <div>
      <main>
        <section>
          <span className="player">Jugador: <span className="choice">{playerChoice.choice}</span></span>
        </section>
        <section>
          <span className="machine">Maquina: <span className="choice">{machineChoice.choice}</span> </span>
        </section>
      </main>
      <div className="options">
          {options.map((value,index) =>(
              <Option key={index} selectOptions={selectOptions} value={options[index]}/>
          ))}
      </div>
      <Result playerChoice={playerChoice} machineChoice={machineChoice} />

    </div>
  );
};
