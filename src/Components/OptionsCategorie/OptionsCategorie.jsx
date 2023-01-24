import React, { useState, useEffect } from "react";
import { getAsked } from "../../Mock/getAsked";
export const OptionsCategorie = ({ setCategories, setViewQuestions }) => {
  const [options, setOptions] = useState({});
  useEffect(() => {
    let hash = {};
    let array = [];
    array = getAsked.filter((o) =>
      hash[o.categoria] ? false : (hash[o.categoria] = true)
    );
    setOptions(array);
  }, []);
  const selectOptions = (categoria) => {
    setCategories(categoria);
    setViewQuestions(true);
  };
  return (
    <>
      {options.length > 0 && (
        <div className="container-options-categorie">
          {options.map((categorie, index) => (
            <button
              className="btn-categoria"
              onClick={() => selectOptions(categorie.categoria)}
              key={index}
            >
              {categorie.categoria}
            </button>
          ))}
        </div>
      )}
    </>
  );
};
