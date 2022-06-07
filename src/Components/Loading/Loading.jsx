import React from 'react'

export const Loading = ({
    asked
}) => {
    if (asked) {
        return (
            <>
                <hr className='lineal-asked' />
                <div className='loading-asked'>
                    <div className='bar-asked'></div>
                </div>
                <span className='next-asked'>Siguiente pregunta</span>
            </>
        )
    } else {
        return null
    }
}
