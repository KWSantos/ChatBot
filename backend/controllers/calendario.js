const app = app => {
    const mostrarEvento = (req, res) => {
        res.send('Evento tal')
    }
    return { mostrarEvento }
}

export { app }