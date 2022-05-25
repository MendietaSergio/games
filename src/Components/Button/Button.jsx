import React from 'react'

export const Button = ({
    className,
    answer,
    pressBtn,
    disabled
}) => {
    return (
        <>
            <button
                className={className}
                onClick={(e) => pressBtn(e)}
                value={answer}
                id={`${answer}`}
                disabled={disabled}
            >{answer}</button>

        </>
    )
}
