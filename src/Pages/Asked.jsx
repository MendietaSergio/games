import React, { useEffect, useState } from "react";
import { getAsked } from "../Mock/getAsked";
import "../css/Asked.css";
import { Button } from "../Components/Button/Button";
import swal from "sweetalert";
import { Loading } from "../Components/Loading/Loading";
import { Header } from "../Components/Header/Header";
import imgSuccess from "../Img/Asked/success.png";
import imgError from "../Img/Asked/errors.png";
import { OptionsCategorie } from "../Components/OptionsCategorie/OptionsCategorie";

export const Asked = () => {
  const [questions, setQuestions] = useState({});
  const [answers, setAnswers] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [viewQuestions, setViewQuestions] = useState(false);
  const [categorie, setCategories] = useState("");
  const [point, setPoint] = useState(0);
  const [fallidos, setFallidos] = useState(0);
  const [status, setStatus] = useState([]);
  const [cantAsked, setCantAsked] = useState(0);
  const [loading, setLoading] = useState(false);
  const [cant, setCant] = useState(1);
  let finalized = false;
  let positions = 0;
  let options;
  const Asked = async () => {
    let filterAsked = getAsked.filter((id) => id.categoria === categorie);
    positions = Math.floor(Math.random() * filterAsked.length);
    setQuestions(filterAsked[positions]);
    options = [
      filterAsked[positions].respuesta,
      filterAsked[positions].incorrecta1,
      filterAsked[positions].incorrecta2,
      filterAsked[positions].incorrecta3,
    ];
    options.sort(() => Math.random() - 0.5);
    setAnswers(options);
  };
  useEffect(() => {
    if (categorie !== "") {
      Asked();
    }
  }, [categorie]);

  const pressBtn = (select) => {
    if (select.target.value === questions.respuesta) {
      setPoint(point + 1);
      document.getElementById(select.target.value).classList.add("success");
      document.getElementById(questions.incorrecta1).classList.add("failed");
      document.getElementById(questions.incorrecta2).classList.add("failed");
      document.getElementById(questions.incorrecta3).classList.add("failed");
      setStatus([...status, imgSuccess]);
    } else {
      setFallidos(fallidos + 1);
      setStatus([...status, imgError]);
      document.getElementById(select.target.value).classList.add("failed");
    }
    setDisabled(true);
  };
  useEffect(() => {
    if (cantAsked > 0) {
      if (fallidos + point == cantAsked) {
        if (point >= 1) {
          let message =
            point > 1
              ? `Sumaste ${point} preguntas correctas de ${cantAsked}`
              : `Realizaste solo ${point} pregunta correcta de ${cantAsked}`;
          swal({
            title: "¡Felicitaciones!",
            text: message,
            buttons: true,
            dangerMode: true,
          }).then((select) => {
            if (select) {
              swal("¡ Hasta la proxima !")
                .then(() => {
                  finalized = true;
                })
                .finally(() => nextQuenstion());
            }
          });
        } else {
          let message = "intentalo de nuevo !";
          swal({
            title: "No acertaste ninguna :c",
            text: message,
            buttons: true,
            dangerMode: true,
          })
            .then(() => {
              finalized = true;
            })
            .finally(() => nextQuenstion());
        }
      } else {
        setLoading(true);
        nextQuenstion();
      }
    }
  }, [fallidos, point]);
  const nextQuenstion = (next) => {
    if (finalized) {
      setPoint(0);
      setDisabled(false);
      setLoading(false);
      setCantAsked(0);
      setCategories("");
      setFallidos(0);
      setViewQuestions(false);
      reset();
      setStatus([]);
      setCant(1);
    } else {
      setTimeout(() => {
        Asked();
        if (cant != cantAsked) {
          setCant(cant + 1);
        }
        setDisabled(false);
        setLoading(false);
        reset();
      }, 5000);
    }
  };
  const reset = () => {
    document.getElementById(questions.respuesta).classList.remove("success");
    document.getElementById(questions.incorrecta1).classList.remove("failed");
    document.getElementById(questions.incorrecta2).classList.remove("failed");
    document.getElementById(questions.incorrecta3).classList.remove("failed");
  };
  const hanbleCantAsked = (e) => {
    setCantAsked(e.target[0].value);
    e.preventDefault();
  };
  return (
    <>
      <Header />
      <div className="container-asked">
        {!viewQuestions && cantAsked === 0 && (
          <>
            <div className="container-cant-asked">
              <form className="container-form" onSubmit={hanbleCantAsked}>
                <input
                  type="number"
                  name="numberCant"
                  className=""
                  min="3"
                  max="5"
                  placeholder="Ingresá cantidad preguntas"
                  required
                />
                <button className="btn-cantAsked" type="submit">
                  Siguiente
                </button>
              </form>
            </div>
          </>
        )}
        {!viewQuestions && cantAsked > 0 && (
          <OptionsCategorie
            setViewQuestions={setViewQuestions}
            setCategories={setCategories}
          />
        )}
        {viewQuestions && (
          <>
            <div className="categorie">
              <h2>{questions.categoria}</h2>
            </div>
            <div className="point">
              <div className="container-status">
                <div>
                  {status.map((imgStatus, index) => (
                    <img
                      key={index}
                      src={imgStatus}
                      alt="test"
                      className="img-status"
                    />
                  ))}
                </div>
                <span>
                  {cant} / {cantAsked}
                </span>
              </div>
            </div>
            <div className="header">
              <div className="number"></div>
              <div className="asked">
                <span>{questions.pregunta}</span>
              </div>
              <div className="container-img">
                {questions.imagen !== undefined ? (
                  <img src={questions.imagen} className="img-asked" />
                ) : null}
              </div>
            </div>
            {answers.map((answer, index) => (
              <Button
                key={index}
                className="btn"
                answer={answer}
                pressBtn={pressBtn}
                disabled={disabled}
                asked={true}
              />
            ))}
            <div className="container-loading-asked">
              {loading && <Loading asked={true} />}
            </div>
          </>
        )}
      </div>
    </>
  );
};
{
}
