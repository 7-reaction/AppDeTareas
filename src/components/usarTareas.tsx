import { useEffect, useState } from "react"
import type { Tareas } from "../db/task"

const cargar = (): Tareas[] => {
    try {
        return JSON.parse(localStorage.getItem("ArleTareas") ?? "[]")
    } catch {
        return []
    }
}

export const useTareas = () => {
    const [tareas, setTareas] = useState<Tareas[]>(cargar)

    useEffect(() => {
        localStorage.setItem("ArleTareas", JSON.stringify(tareas))
    }, [tareas])

    const agregar = (desc: string) => {
        if (!desc.trim()) return
        setTareas([...tareas, { id: crypto.randomUUID(), desc: desc.trim(), estado: false }])
    }

    const alternar = (id: string) =>
        setTareas(tareas.map((t) => (t.id === id ? { ...t, estado: !t.estado } : t)))

    const borrar = (id: string) => setTareas(tareas.filter((t) => t.id !== id))

    return { tareas, agregar, alternar, borrar }
}