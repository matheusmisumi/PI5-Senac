'use strict';
const ServicosController = require('../../controllers/ServicosController');
const db = require('../../dbFactory');

module.exports = (app) => {
    app.route('/servicos')
    .post((req, res) => {
        ServicosController.cadastrar(req, res, db);
    })
    .get((req, res) => {
        ServicosController.getAll(req, res, db);
    });

    app.get('/servicos/prestador/:idPrestador', (req, res) => {
        ServicosController.getPrestador(req, res, db);
    });

    app.route('/servicos/:servico')
    .get((req, res) => {
        ServicosController.buscarPedido(req, res, db);
    })

    app.route('/servicos/:id')
    .put((req, res) => {
        ServicosController.put(req, res, db);
    })
    .delete((req, res) => {
        ServicosController.delete(req, res, db);
    })
    .get((req, res) => {
        ServicosController.get(req, res, db);
    });
}