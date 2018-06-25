'use strict';
const EnderecoController = require('../../controllers/EnderecoController');
const db = require('../../dbFactory');

module.exports = (app) => {
    app.route('/endereco')
    .post((req, res) => {
        EnderecoController.cadastrar(req, res, db);
    });
    
    app.get('/endereco/usuario/:id', (req, res) => {
        EnderecoController.getUsuario(req,res, db);
    });

    app.route('/endereco/:id')
    .get((req, res) => {
        EnderecoController.get(req, res, db);
    })
    .put((req, res) => {
        EnderecoController.put(req, res, db)
    })
    .delete((req, res) => {
        EnderecoController.delete(req, res, db)
    });
}
