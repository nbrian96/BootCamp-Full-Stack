import React, { useState } from 'react'

const Contador = () => {
    /*
    A la variable counter se le asigna el valor inicial de state que es cero.
    La variable setCounter se asigna a una función que se utilizará para modificar el estado.
    */
    const [ counter, setCounter ] = useState(0)

    setTimeout(
        () => setCounter(counter + 1),
        60000
    )

    return (
        <div>
            <h2>Minutero</h2>
            {counter}
        </div>
    )
}

export default Contador;