'use strict';
const DadosBancariosController = require('../dadosBancariosController');
const db = require('../../dbFactory');

module.exports = (app) => {
    app.route('/dadosBancarios')
    .post((req, res) => {
        DadosBancariosController.cadastrar(req, res, db);
    })
    .get((req, res) => {
        DadosBancariosController.get(req,res, db);
    });

    app.route('/dadosBancarios/:id')
    .put((req, res) => {
        DadosBancariosController.put(req, res, db);
    })
}