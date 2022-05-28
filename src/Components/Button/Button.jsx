import React from "react";

export const Button = ({ 
    className,
    answer,
    pressBtn,
    disabled,
    asked,
    memo,
    reset,
    text
}) => {
  if (asked) {
    return (
      <>
        <button
          className={className}
          onClick={(e) => pressBtn(e)}
          value={answer}
          id={`${answer}`}
          disabled={disabled}
        >
          {answer}
        </button>
      </>
    );
  }
  if(memo){
      return(
        <button
        className={className}
        onClick={() => reset()}
      >
        {text}
      </button>
      )
  }
};
