import React, { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import backFace from "../../Img/Memo/memes/question-mark-card.png";
export const Card = ({
  name,
  number,
  frontFace,
  flipCard,
  unflippedCards,
  disabledCards,
  setClicks,
  clicks,
  reset,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasEvent, setHasEvent] = useState(true);

  useEffect(() => {
    if (unflippedCards.includes(number)) {
      setTimeout(() => {
        setIsFlipped(false);
      }, 700);
    }
  }, [unflippedCards]);

  useEffect(() => {
    setIsFlipped(false);
    setHasEvent(true);
  }, [reset]);

  useEffect(() => {
    if (disabledCards.includes(number)) {
      setHasEvent(false);
    }
  }, [disabledCards]);

  const handleClick = (e) => {
    setClicks(clicks + 1);
    const value = flipCard(name, number);
    if (value != 0) {
      setIsFlipped(!isFlipped);
    }
  };
  return (
    <div className="card">
      <ReactCardFlip isFlipped={isFlipped}>
        <img
          src={backFace}
          alt="back-face"
          className="card-image"
          onClick={hasEvent ? handleClick : null}
        />
        <img
          src={frontFace}
          alt="front-face"
          className="card-image"
          onClick={hasEvent ? handleClick : null}
        />
      </ReactCardFlip>
    </div>
  );
};
