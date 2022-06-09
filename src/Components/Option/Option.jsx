import React from "react";

export const Option = ({ selectOptions, value }) => {
  return (
    <div className="option">
      <img 
         onClick={selectOptions}
        src={value.img} alt={value.choice} className="img-options" />
    </div>
  );
};
