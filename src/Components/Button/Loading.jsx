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
                <span>Siguiente pregunta</span>
            </>
        )
    } else {
        return null
    }
}
