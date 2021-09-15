import React from 'react'
import ReactDOM from 'react-dom'

//import Teoria from './Teoria'
import Parte1C from './Parte1C'
import Contador from './Contador'
import Ejercicio1 from './Ejercicio1'
import ContadorManual from './ContadorManual'
import LeftRight from './LeftRight'
import LeftRightBis from './LeftRightBis'
import Ejercicio1D from './Ejercicio1D'
import Anecdotes from './Anecdotes'

const App = () => {
  return(
    <div>
      <Ejercicio1 />
      <br></br>
      <Parte1C />
      <br></br>
      <Contador />
      <br></br>
      <ContadorManual />
      <br></br>
      <LeftRight />
      <br></br>
      <LeftRightBis />
      <br></br>
      <Ejercicio1D />
      <br></br>
      <Anecdotes />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

/*
let counter = 0

const refresh = () => {
  ReactDOM.render(<App counter={counter} />,
  document.getElementById('root'))
}

// Hacer llamadas repetidas al método ReactDOM.render no es la forma recomendada de volver a renderizar componentes.
setInterval(() => {
  refresh()
  counter += 1
}, 1000)
*/
