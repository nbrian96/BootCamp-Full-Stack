/*
const Hello = (props) => {
    const name = props.name
    const age = props.age

    //Destructuracion simple
    const { name, age } = props
*/

//Destructuracion con una vuelta de rosca mas
const Hello = ({name, age}) => {
    const bornYear = () => {
        const yearNow = new Date().getFullYear()
        return yearNow - age
    }

    return (
        <div>
            <p>Hello {name}, you are {age} years old</p>
            <p>So you were probably born in {bornYear()}</p>
        </div>
    )
}

const Parte1C = () => {
    const name = 'Peter'
    const age = 10

    return (
        <div>
            <h1>Greetings</h1>
            <Hello name="Maya" age={26 + 10} />
            <Hello name={name} age={age} />
        </div>
    )
}

export default Parte1C;

