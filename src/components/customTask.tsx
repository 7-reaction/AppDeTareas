import { useState } from "react"
import { useTareas } from "./usarTareas"

export const CustomTareas = () => {
    const { tareas, agregar, alternar, borrar } = useTareas()
    const [desc, setDesc] = useState("")

    const onAgregar = () => {
        agregar(desc)
        setDesc("")
    }

    return (
        <div className="tareas">
            <h1> <i className="icon-clipboard"></i> Tareas por hacer  <i className="icon-clipboard"></i></h1>
            <div className="tareas__nueva">
                <input value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Crea una nueva tarea"/>
                <button onClick={onAgregar}>Nueva tarea <i className="icon-th-large"></i></button>
            </div>
            {tareas.map((t, i) => (
                <div key={t.id} className={`tarea ${t.estado ? "tarea--hecha" : ""}`}>
                    <p>{i + 1}.- {t.desc} {t.estado && <span>Completada</span>}</p>
                    <input type="checkbox" checked={t.estado} onChange={() => alternar(t.id)} />
                    <button onClick={() => borrar(t.id)}>borrar <i className="icon-trash-1"></i></button>
                </div>
            ))}
        </div>
    )
}