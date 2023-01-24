import React, { useState, useEffect } from "react";
import { Option } from "../Components/Option/Option";
import { Result } from "../Components/Result/Result";
import rock from "../Img/rock-paper-scissors/rock.png";
import paper from "../Img/rock-paper-scissors/paper.png";
import scissors from "../Img/rock-paper-scissors/scissors.png";
import "../css/StonePaperScissors.css";
import { Message } from "../Components/Message/Message";
import { Header } from "../Components/Header/Header";
export const StonePaperScissors = () => {
  const [playerChoice, setPlayerChoice] = useState({});
  const [machineChoice, setMachineChoice] = useState({});
  const [alert, setAlert] = useState(true);
  useEffect(() => {
    setTimeout(() => setAlert(false), 5000);
  }, []);
  const options = [
    {
      choice: "rock",
      defeat: "scissors",
      img: rock,
    },
    {
      choice: "paper",
      defeat: "rock",
      img: paper,
    },
    {
      choice: "scissors",
      defeat: "paper",
      img: scissors,
    },
  ];
  const selectOptions = (event) => {
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
      <Header />
      {alert && <Message setAlert={setAlert} />}
      <main className="main-info">
        <section>
          <span className="player">
            Jugador: <span className="choice">{playerChoice.choice}</span>
          </span>
        </section>
        <section>
          <span className="machine">
            Maquina: <span className="choice">{machineChoice.choice}</span>{" "}
          </span>
        </section>
      </main>
      <div className="options">
        {options.map((value, index) => (
          <Option
            key={index}
            selectOptions={selectOptions}
            value={options[index]}
          />
        ))}
      </div>
      <Result playerChoice={playerChoice} machineChoice={machineChoice} />
    </div>
  );
};
