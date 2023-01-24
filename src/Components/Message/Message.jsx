import React from 'react'
import '../../css/Message.css'
export const Message = ({setAlert}) => {
  return (
    <div className='container-message alert'>
        <div className='container-text-alert'>
        Juego en proceso... Falta mejorar el diseño
        </div>
        <div className='closed-alert' onClick={()=>setAlert(false)}>
            x
        </div>
    </div>
  )
}
