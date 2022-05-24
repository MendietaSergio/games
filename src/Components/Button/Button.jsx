import React from 'react'

export const Button = ({
    className,
    questions,
    pressBtn
}) => {
    let answers = []
    answers.push(questions.respuesta)
    answers.push(questions.incorrecta1)
    answers.push(questions.incorrecta2)
    answers.push(questions.incorrecta3)
    console.log("ordenado ", answers);

    answers.sort(() => Math.random() - 0.5)

    console.log("desordenado ", answers);


    return (
        <>
            {
                answers.map((id, index) => (
                    <button className={className} onClick={(e) => pressBtn(e.target.value)} value={id} >{id}</button>
                ))
            }
        </>
    )
}
