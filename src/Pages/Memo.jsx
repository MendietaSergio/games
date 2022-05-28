import React, { useEffect, useState } from "react";
import Images from "../Utils/Images";
import { shuffle } from "lodash";
import "../css/Memo.css";
import { Button } from "../Components/Button/Button";
export const Memo = () => {
  const [cards, setCards] = useState();
  const [clicks, setClicks] = useState(0);
  const [finish, setFinish] = useState(false);
  const [activeCards, setActiveCards] = useState([]);
  const [foundPairs, setFoundPairs] = useState([]);
  const [loading, setLoading] = useState(false);

  const flipCard = (index) => {
    // if (finish) {
    //   setCards(shuffle([...Images, ...Images]));
    //   setFoundPairs([]);
    //   setFinish(false);
    //   setClicks(0);
    // }
    if (activeCards.length === 0) {
      setActiveCards([index]);
    }
    if (activeCards.length === 1) {
      const firstIndex = activeCards[0];
      const secondsIndex = index;
      if (cards[firstIndex] === cards[secondsIndex]) {
        if (foundPairs.length + 2 === cards.length) {
          setFinish(true);
        }
        setFoundPairs([...foundPairs, firstIndex, secondsIndex]);
      }
      setActiveCards([...activeCards, index]);
    }
    if (activeCards.length === 2) {
      setActiveCards([index]);
    }
    setClicks(clicks + 1);
  };
//   useEffect(() => {
//     const randomCards = async () => {
//       setCards(shuffle([...Images, ...Images]));
//       setLoading(true)
//     };
//   }, []);
//   randomCards();
  const reset = () => {
    setCards(shuffle([...Images, ...Images]));
    setFoundPairs([]);
    setFinish(false);
    setClicks(0);
  };
  return (
    <div className="container-memo">
      {loading ? (
        <div className="board-memo">
          {cards.map((card, index) => {
            const flippedToFront =
              activeCards.indexOf(index) !== -1 ||
              foundPairs.indexOf(index) !== -1;
            console.log(card);
            return (
              <div
                key={index}
                className={"card-outer " + (flippedToFront ? "flipped" : "")}
                onClick={() => flipCard(index)}
              >
                <div className="card">
                  <div className="front">
                    <img src={card} alt="card" />
                  </div>
                  <div className="back" />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <span>falso</span>
      )}
      <div className="stats">
        {finish ? (
          <>
            <span>Felicitaciones lo lograste en {clicks} intentos</span>
            <Button
              className="btn-reset-memo"
              memo={true}
              reset={reset}
              text="Reset"
            />
          </>
        ) : (
          <>
            <span className="clicks">Clicks: {clicks}</span>
            {/* <br /> */}
            <span className="foundPairs">
              Encontrados: {foundPairs.length / 2}
            </span>
          </>
        )}
      </div>
    </div>
  );
};
