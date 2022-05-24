import React, { useEffect, useState } from 'react'
import { getAsked } from '../Mock/getAsked'
import '../css/Asked.css'
import { Button } from '../Components/Button/Button'
export const Asked = () => {
    const [questions, setQuestions] = useState({})
    const [options, setOptions] = useState({})
    let cant =[]
    let positions = 0;
    useEffect(() => {
        positions = Math.floor(Math.random() * getAsked.length)
        console.log(questions);
        console.log("cant => ", positions);
        console.log("getAsked => ", getAsked[positions]);
        setQuestions(getAsked[positions])
    }, [])

    const pressBtn = (select) => {
        console.log("seleccionado => ", select);
    }
    
    return (

        <div className='container-asked'>
            {questions === undefined ? (null) : (
                <>
                    <div className="point"></div>
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
                    <Button
                        className="btn"
                        questions={questions}
                        pressBtn={pressBtn}
                    />
                </>
            )}
        </div>
    )
}
