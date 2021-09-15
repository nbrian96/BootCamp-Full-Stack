import React, { useState } from 'react'

const numeroRandom = (minimo, maximo, actual) => {
    const num = Math.floor((Math.random() * (maximo - minimo + 1)) + minimo)
    if (actual === num) {
        return numeroRandom(minimo, maximo, actual)
    }
    return num
}

const Buttom = ({func, text}) => <button onClick={func}>{text}</button>

const Display = ({text}) => {
    return (
        <p>{text}</p>
    )
}

const Anecdotes = () => {

    const anecdotes = [
        {
            text: 'If it hurts, do it more often',
            votos:  useState(0)
        },
        {
            text: 'Adding manpower to a late software project makes it later!',
            votos:  useState(0)
        },
        {
            text: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
            votos:  useState(0)
        },
        {
            text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
            votos:  useState(0)
        },
        {
            text: 'Premature optimization is the root of all evil.',
            votos:  useState(0)
        },
        {
            text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
            votos:  useState(0),
        }
    ]
    const [selected, setSelected] = useState(0)

    const text = anecdotes[selected].text
    const cantVotes = 'Has ' + anecdotes[selected].votos[0] +' votes'

    const textNext = 'next anecdote'
    const nextAnec = () => {
        const num = numeroRandom(0, anecdotes.length -1, selected)
        setSelected(num)
    }

    const textVote = 'vote'
    const actualizarVotos = () => {
        const setVotes = anecdotes[selected].votos[1]
        const votes = anecdotes[selected].votos[0]
        setVotes(votes+1)
    }

    return (
    <div>
        <h1>Anecdotes</h1>
        <Display text={text} />
        <Display text={cantVotes} />

        <Buttom func={actualizarVotos} text={textVote} />
        <Buttom func={nextAnec} text={textNext} />

    </div>
    )
}

export default Anecdotes