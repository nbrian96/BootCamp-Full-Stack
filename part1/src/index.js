import React from 'react'
import ReactDOM from 'react-dom'
import Ejercicio1 from './Ejercicio1'
//import Teoria from './Teoria'

const App = () => {
  return(
    <div>
      <Ejercicio1 />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))