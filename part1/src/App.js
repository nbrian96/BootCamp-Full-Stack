import './App.css';
import Mensaje from './Mensaje.js';

const Description = () => {
  return <p>Esta es la app del curso FullStack BootCamp</p>
}

const App = () => {

  return (
    <div className="App">
    <Mensaje color='blue' message='Estamos trabajando' />
    <Mensaje color='red' message='en un curso' />
    <Mensaje color='grey' message='de React' />
    <Description />
    </div>
  );
}

export default App;
