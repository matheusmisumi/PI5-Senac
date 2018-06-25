'use strict';
const CategoriaController = require('../../controllers/CategoriaController');
const db = require('../../dbFactory');

module.exports = (app) => {
    app.route('/categoria')
    .post((req, res) => {
        CategoriaController.cadastrar(req, res, db);
    })
    .get((req, res) => {
        CategoriaController.getAll(req, res, db);
    });

    app.route('/categoria/:id')
    .put((req, res) => {
        CategoriaController.put(req, res, db);
    })
    .get((req, res) => {
        CategoriaController.getOne(req, res, db);
    });
}