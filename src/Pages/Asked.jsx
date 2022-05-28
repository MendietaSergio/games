import React, { useEffect, useState } from 'react'
import { getAsked } from '../Mock/getAsked'
import '../css/Asked.css'
import { Button } from '../Components/Button/Button'
import swal from 'sweetalert';
import { Loading } from '../Components/Button/Loading';

export const Asked = () => {
    const [questions, setQuestions] = useState({})
    const [success, setSuccess] = useState('')
    const [failed, setFailed] = useState('')
    const [answers, setAnswers] = useState([])
    const [disabled, setDisabled] = useState(false)
    const [point, setPoint] = useState(0)
    const [fallidos, setFallidos] = useState(0)
    const [cant, setCant] = useState(0)
    const [cantAsked, setCantAsked] = useState(2)
    const [loading, setLoading] = useState(false)
    let finalized = false;
    let positions = 0;
    const Asked = async () => {
        positions = Math.floor(Math.random() * getAsked.length)
        setQuestions(getAsked[positions])
        setAnswers([
            getAsked[positions].respuesta,
            getAsked[positions].incorrecta1,
            getAsked[positions].incorrecta2,
            getAsked[positions].incorrecta3
        ])
        setCant(cant + 1)
    }
    useEffect(() => {
        positions = Math.floor(Math.random() * getAsked.length)
        Asked()
    }, [])

    const pressBtn = (select) => {
        if (select.target.value === questions.respuesta) {
            setPoint(point + 1)
            document.getElementById(select.target.value).classList.add('success')
            document.getElementById(questions.incorrecta1).classList.add('failed')
            document.getElementById(questions.incorrecta2).classList.add('failed')
            document.getElementById(questions.incorrecta3).classList.add('failed')
        } else {
            setFallidos(fallidos+1)
            document.getElementById(select.target.value).classList.add('failed')
        }
        setDisabled(true)
        if (fallidos === 2) {
            swal({
                title: "¡Felicitaciones!",
                text: `Llegaste hasta las ${point} preguntas correctas`,
                // icon: "success",
                buttons: true,
                dangerMode: true
            })
                .then((select) => {
                    if (select) {
                        swal("A seguir sumando puntos...!!")
                            .then(() => {
                                setCantAsked(cantAsked + 2)
                                nextQuenstion()
                                setLoading(true)
                            })
                    } else {
                        swal("Gracias por haber jugado =)")
                            .then(() => {
                                finalized = true
                                nextQuenstion()
                            })
                    }
                })
        } else {
            setLoading(true)
            nextQuenstion()
        }
    }
    const nextQuenstion = (next) => {

        if (finalized) {
            setCant(0)
            setPoint(0)
            setCantAsked(2)
            setDisabled(false)
            setLoading(false)
            reset()
        } else {
            setTimeout(() => {
                Asked()
                setDisabled(false)
                setLoading(false)
                reset()
            }, 5000);
        }
    }
    const reset = () => {
        document.getElementById(questions.respuesta).classList.remove('success')
        document.getElementById(questions.incorrecta1).classList.remove('failed')
        document.getElementById(questions.incorrecta2).classList.remove('failed')
        document.getElementById(questions.incorrecta3).classList.remove('failed')
    }
    return (

        <div className='container-asked'>
            {questions === undefined ? (null) : (
                <>
                    <div className="point">
                        <span>{point} / {cant}</span>
                    </div>
                    <div className="header">
                        <div className="categorie">
                            <h2>{questions.categorie}</h2>
                        </div>
                        <div className="number"></div>
                        <div className="asked">
                            <span>{questions.pregunta}</span>
                        </div>
                        <div className='container-img'>
                            <img src={questions.imagen} className='img-asked' />
                        </div>
                    </div>
                    {answers.map((answer, index) => (
                        <Button
                            key={index}
                            className="btn"
                            answer={answer}
                            pressBtn={pressBtn}
                            success={success}
                            failed={failed}
                            disabled={disabled}
                            asked={true}
                        />
                    ))}
                    {loading && <Loading asked={true} />}
                </>
            )}
        </div>
    )
}
