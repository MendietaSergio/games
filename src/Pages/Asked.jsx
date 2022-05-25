import React, { useEffect, useState } from 'react'
import { getAsked } from '../Mock/getAsked'
import '../css/Asked.css'
import { Button } from '../Components/Button/Button'
export const Asked = () => {
    const [questions, setQuestions] = useState({})
    const [success, setSuccess] = useState('')
    const [failed, setFailed] = useState('')
    const [answers, setAnswers] = useState([])
    const [disabled, setDisabled] = useState(false)
    const [point, setPoint] = useState(0)
    const [cant, setCant] = useState(0)
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
            document.getElementById(select.target.value).classList.add('failed')
        }
        setDisabled(true)
        nextQuenstion()
    }
    const nextQuenstion = () => {
        setTimeout(() => {
            document.getElementById(questions.respuesta).classList.remove('success')
            document.getElementById(questions.incorrecta1).classList.remove('failed')
            document.getElementById(questions.incorrecta2).classList.remove('failed')
            document.getElementById(questions.incorrecta3).classList.remove('failed')
            Asked()
            setDisabled(false)
        }, 5000);
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
                        />
                    ))}
                </>
            )}
        </div>
    )
}
