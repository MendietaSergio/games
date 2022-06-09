import React from 'react'

export const Result = ({machineChoice, playerChoice}) => {
    let resultFinal;

    if(playerChoice.defeat === machineChoice.choice && playerChoice.choice){
        resultFinal = <h1>Ganador: Jugador </h1>
    } else if( machineChoice.defeat === playerChoice.choice && playerChoice.choice){
        resultFinal = <h1>Ganador: Máquina</h1>
    } else if(playerChoice.choice === machineChoice.choice && playerChoice.choice){
        resultFinal = <h1>Empate</h1>
    }

    return (
        <h1>{resultFinal}</h1>
    )
}
