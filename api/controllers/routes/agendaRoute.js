'use strict';
const AgendaController = require('../../controllers/AgendaController');
const db = require('../../dbFactory');

module.exports = (app) => {
    app.route('/agenda')
    .post((req, res) => {
        AgendaController.cadastrar(req, res, db);
    })
    .get((req, res) => {
        AgendaController.findAll(req, res, db);
    });

    app.route('/agenda/:id')
    .put((req, res) => {
        AgendaController.put(req, res, db);
    })
    .get((req, res) => {
        AgendaController.getOne(req, res, db);
    });
}