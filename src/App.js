import './App.css';
import ListaDeTareas from './components/ListaDeTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='tareas-lista-principal'>
        <h1> Tareas de Alissa</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
