import React, { useEffect, useState } from "react";
import { images } from "../Utils/Images";
import "../css/Memo.css";
import { Button } from "../Components/Button/Button";
import { Card } from "../Components/Card/Card";
export const Memo = () => {
  const [cards, setCards] = useState([]);
  const [clicks, setClicks] = useState(0);
  const [firstCard, setFirstCard] = useState({});
  const [secondCard, setSecondCard] = useState({});
  const [unflippedCards, setUnflippedCards] = useState([]);
  const [disabledCards, setDisabledCards] = useState([]);
  const [foundPairs, setFoundPairs] = useState(0);
  const [finish, setFinish] = useState(false);
  const [loading, setLoading] = useState(true);
  const [reset, setReset] = useState(false)
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };
  const randomCard = () => {
    shuffleArray(images);
    setCards(images);
  };
  useEffect(() => {
    randomCard()
  }, []);

  useEffect(() => {
    checkForMatch();
  }, [secondCard]);

  const flipCard = (name, number) => {
    if (firstCard.name === name && firstCard.number === number) {
      return 0;
    }
    if (!firstCard.name) {
      setFirstCard({ name, number });
    } else if (!secondCard.name) {
      setSecondCard({ name, number });
    }
    return 1;
  };

  const checkForMatch = () => {
    if (firstCard.name && secondCard.name) {
      const match = firstCard.name === secondCard.name;
      match ? disableCards() : unflipCards();

      if (match) {
        setFoundPairs(foundPairs + 1);
      }
    }
  };
  useEffect(() => {
    if (foundPairs === 6) {
      setFinish(true);
    }
  }, [foundPairs]);
  const disableCards = () => {
    setDisabledCards([firstCard.number, secondCard.number]);
    resetCards();
  };

  const unflipCards = () => {
    setUnflippedCards([firstCard.number, secondCard.number]);
    resetCards();
  };

  const resetCards = (reset) => {
    setFirstCard({});
    setSecondCard({});
    if(reset){
      setReset(true)
      setTimeout(() => {
        randomCard()
        setReset(false)
        setFinish(false)
        setClicks(0)
        setFoundPairs(0)
      }, 700);
    }
  };

  return (
    <div className="container-memo">
      <div className="board-memo ">
        {loading ? (
          cards.map((card, index) => (
            <Card
              key={index}
              name={card.player}
              number={index}
              frontFace={card.src}
              flipCard={flipCard}
              unflippedCards={unflippedCards}
              disabledCards={disabledCards}
              setClicks={setClicks}
              clicks={clicks}
              reset={reset}
            />
          ))
        ) : (
          <span>falso</span>
        )}
      </div>
      <div className="stats">
        {finish ? (
          <>
            <span>Felicitaciones lo lograste en {clicks} intentos</span>
            <Button
              className="btn-reset-memo"
              memo={true}
              resetCards={resetCards}
              text="Reset"
            />
          </>
        ) : (
          <>
            <span className="clicks">Clicks: {clicks}</span>
            <br />
            <span className="foundPairs">Encontrados: {foundPairs}</span>
          </>
        )}
      </div>
    </div>
  );
};
