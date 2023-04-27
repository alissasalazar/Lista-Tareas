import React, {useState} from "react"
import TareaFormulario from "./TareaFormulario"
import "../Hojas-de-estilo/ListaDeTareas.css"
import Tarea from "./Tarea.jsx"

function ListaDeTareas () {
    const [tareas, setTareas] = useState([])

    const agregarTarea = tarea => {
      console.log(tarea)
      if( tarea.texto.trim())
      // trim() es un metodo que permite eliminar los espacios del principio y final de una cadena de caracteres
      tarea.texto = tarea.texto.trim()
      const tareasActualizadas = [tarea, ...tareas]
      setTareas(tareasActualizadas)
    };

    const eliminarTarea = id => {
      const tareasActualizadas = tareas.filter( tarea => tarea.id !== id)
      setTareas(tareasActualizadas)
    };

    const completarTarea = id => {
      const tareasActualizadas = tareas.map(tarea => {
        if(tarea.id === id){
          tarea.completada = !tarea.completada;
        }
        return tarea
      });
      setTareas(tareasActualizadas)
    }

    return (
      // Usamos etiquetas vacias cuando no deseamos colocar contenedor adicional, se llama fragmento
    <>
        <TareaFormulario onSubmit = {agregarTarea}/>
        <div className="tareas-lista-contenedor">
            {
            // Por usar map se agrega cada componente cuando se actualiza la lista( usando setTareas)
            tareas.map((tarea) => 
            <Tarea 
                // Usamos Key e ID porque Key no se puede usar como un prop del componente
                key= { tarea.id}
                id = {tarea.id}
                texto= {tarea.texto}
                completada = {tarea.completada}
                eliminarTarea={ eliminarTarea}
                completarTarea={ completarTarea }
            />
            )
            }
        </div>
    </>  
    )
}

export default ListaDeTareas