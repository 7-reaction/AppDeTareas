export interface Tareas{
    id: string;
    desc: string;
    estado: boolean;
}

export const listaTareas: Tareas[]=[
    {
        id: '1',
        desc: "Acabar Kamen rider OOO",
        estado: false
    },
    {
        id: '2',
        desc: "Jugar Megaman X",
        estado: true
    },
    {
        id: '3',
        desc: "Ver Kamen Rider Build",
        estado: true
    },
    {
        id: '4',
        desc: "Pegarle a Andres",
        estado: false
    },
     {
        id: '5',
        desc: "Ver Majo no TabiTabi (Otra vez)",
        estado: false
    },
     {
        id: '6',
        desc: "Ya no se me ocurre con que rellenar",
        estado: true
    },
     {
        id: '7',
        desc: "Leer Abara",
        estado: false
    }
];