'use strict';
const UsuarioController = require('../../controllers/UsuarioController');
const db = require('../../dbFactory');

module.exports = (app) => {
    app.route('/usuario')
    .post((req, res) => {
        UsuarioController.cadastrar(req, res, db);
    });

    app.route('/usuario/:id')
    .get((req, res) => {
        UsuarioController.get(req, res, db);
    })
    .put((req, res) => {
        UsuarioController.atualizar(req, res, db);
    });
}
