module.exports = app => {
    const mostrarEvento = (req, res) => {
        res.send('Evento tal')
    }
    return { mostrarEvento }
}