import React, { useState } from 'react'

const LeftRight = () => {
    /*
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    */

    //Unificando
    const [clicks, setClicks] = useState({left: 0, right: 0})

    const handleLeftClick = () => {
        /*
        const newClicks = {
            left: clicks.left + 1,
            right: clicks.right
        }
        setClicks(newClicks)
        */

        // Mas eficiente
        const newClicks = {
            ...clicks,
            left: clicks.left + 1
        }
        setClicks(newClicks)
    }

    // Super compacto
    const handleRightClick = () => setClicks({ ...clicks, right: clicks.right + 1 })

    return (
        <div>
            <h2>Left and Right</h2>
            {clicks.left}
            <button onClick={handleLeftClick}>left</button>
            <button onClick={handleRightClick}>right</button>
            {clicks.right}
        </div>
    )
}

export default LeftRight