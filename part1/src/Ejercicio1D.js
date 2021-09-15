import React, { useState } from 'react'

const Button = ({calificacionFunc, calificacionText}) => <button onClick={calificacionFunc}>{calificacionText}</button>

const Estadistica = ({text, value}) => {

    if (text === 'Positive') {
        return (
            <tr>
                <th>{text}</th>
                <th>{value.toFixed(2)} %</th>
            </tr>
        )
    }
    return (
        <tr>
            <th>{text}</th>
            <th>{value.toFixed(2)}</th>
        </tr>
    )
}

const Calificaciones = ({good, neutral, bad}) => {
    return (
        <div>
            <h1>Give FeedBack</h1>
            <Button calificacionFunc={good} calificacionText={'good'}/>
            <Button calificacionFunc={neutral} calificacionText={'nuetral'}/>
            <Button calificacionFunc={bad} calificacionText={'bad'}/>
        </div>
    )
}

const Estadisticas = ({good, neutral, bad}) => {
    const all = (good + neutral + bad)
    const average = ((good - bad) / all) > 0 ? ((good - bad) / all) : 0
    const positive = ((good / all) * 100) > 0 ? ((good / all) * 100) : 0

    if (all === 0) {
        return (
            <p>No feedback given</p>
        )
    }

    return (
        <div>
            <h2>Statistics</h2>
            <table>
                <tbody>
                <Estadistica text={'Good'} value={good} />
                <Estadistica text={'Nuetral'} value={neutral} />
                <Estadistica text={'Bad'} value={bad} />
                <Estadistica text={'All'} value={all} />
                <Estadistica text={'Average'} value={average} />
                <Estadistica text={'Positive'} value={positive} />
                </tbody>

            </table>
        </div>
    )

}

const Ejercicio1D = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const counterGood = () => setGood(good + 1)
    const counterNeutral = () => setNeutral(neutral + 1)
    const counterBad = () => setBad(bad + 1)

    return (
        <div>
            <Calificaciones good={counterGood} neutral={counterNeutral} bad={counterBad} />
            <Estadisticas good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

export default Ejercicio1D