'use strict';
const AvaliacaoController = require('../../controllers/AvaliacaoController');
const db = require('../../dbFactory');

module.exports = (app) => {
    app.route('/avaliacao')
    .post((req, res) => {
        AvaliacaoController.cadastrar(req, res, db);
    })
    .get((req, res) => {
        AvaliacaoController.get(req,res, db);
    });
}
