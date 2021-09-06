const Header = (props) => <h1>{props.course}</h1>

const Part = (props) => <p>{props.part} {props.exerc}</p>

const Content = (props) => {
    const {parts} = props
    const part1 = parts[0]
    const part2 = parts[1]
    const part3 = parts[2]

    return (
    <div>
        <Part part={part1.name} exerc={part1.exercises} />
        <Part part={part2.name} exerc={part2.exercises} />
        <Part part={part3.name} exerc={part3.exercises} />
    </div>
    )
}

const Total = (props) => {
    const {parts} = props

    const message = 'Number of exercises'
    const total = parts[0].exercises + parts[1].exercises + parts[2].exercises
    return (
        <p>{message} {total}</p>
    )
}

const Ejercicio1 = () => {

    const course = {
        name: 'Half Stack application development',
        parts: [
            {
            name: 'Fundamentals of React',
            exercises: 10
            },
            {
            name: 'Using props to pass data',
            exercises: 7
            },
            {
            name: 'State of a component',
            exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    );
}

export default Ejercicio1;