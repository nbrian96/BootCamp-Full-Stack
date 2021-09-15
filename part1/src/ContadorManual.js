import React, { useState } from 'react'

const Display = ({counter}) => <div>{counter}</div>

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const ContadorManual = () => {
    /*
    const handleClick = () => {
        setCounter(counter + 1)
        console.log('clicked')
    }


    <button onClick={handleClick}>
        plus
    </button>
    */
    const [ counter, setCounter ] = useState(0)

    const increaseByOne = () => setCounter(counter + 1)
    const decreaseByOne = () => setCounter(counter - 1)
    const setToZero = () => setCounter(0)

    return (
        <div>
            <h2>Contador</h2>
            <Display counter={counter}/>

            <Button handleClick={increaseByOne} text='plus' />
            <Button handleClick={setToZero} text='zero' />
            <Button handleClick={decreaseByOne} text='minus' />
        </div>
    )
}

export default ContadorManual