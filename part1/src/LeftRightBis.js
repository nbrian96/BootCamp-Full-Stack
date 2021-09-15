import React, { useState } from 'react'

const History = (props) => {
    if (props.allClicks.length === 0) {
        return (
            <div>
                The app is used by pressing the buttons.
            </div>
        )
    }

    return (
        <div>
            button press history: {props.allClicks.join(' ')}
        </div>
    )
}

const Button = ({handClick, text}) => {
    return (
        <button onClick={handClick}>{text}</button>
    )
}

const LeftRightBis = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])

    const handleLeftClick = () => {
        allClicks.push('L')
        setAll(allClicks)
        setLeft(left + 1)
    }

    const handleRightClick = () => {
        allClicks.push('R')
        setAll(allClicks)
        setRight(right + 1)
    }

    return (
        <div>
            <h2>Left and Right Bis</h2>
            {left}
            <Button handClick={handleLeftClick} text={"left"} />
            <Button handClick={handleRightClick} text={"right"} />
            {right}
            <History allClicks={allClicks} />
        </div>
    )
}

export default LeftRightBis