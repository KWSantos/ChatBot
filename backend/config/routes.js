module.exports = app => {
    app.route('/calendario')
        .post(app.api.calendario.mostrarEvento)
}