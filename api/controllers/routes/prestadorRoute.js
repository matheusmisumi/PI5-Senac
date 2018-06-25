'use strict';
const PrestadorController = require('../../controllers/PrestadorController');
const db = require('../../dbFactory');

module.exports = (app) => {
    app.route('/prestador')
    .post((req, res) => {
        PrestadorController.cadastrar(req, res, db);
    })
    .get((req, res) => {
        PrestadorController.get(req,res, db);
    });

    app.route('/prestador/:id')
    .put((req, res) => {
        PrestadorController.atualizar(req, res, db);
    });

    app.get('/prestador/proximos', (req, res) => {
        PrestadorController.getPrestadores(req, res, db);
    });
}