'use strict';
const pedidoController = require('../../controllers/PedidoController');
const db = require('../../dbFactory');

module.exports = (app) => {

    app.route('/pedido')
    .post((req, res) => {
        pedidoController.cadastrar(req, res, db);
    })
    app.get((req, res) => {
        pedidoController.getAll(req, res, db);
    });

    app.route('/pedido/:idPedido')
    .put((req, res) => {
        pedidoController.atualizaPedido(req, res, db);
    })
    .get((req, res) => {
        pedidoController.getOne(req, res, db);
    });

    app.route('/pedido/prestador/:idPrestador')
    .get((req, res) => {
        pedidoController.getPedidoByIdPrestador(req, res, db);
    })

    app.route('/pedido/usuario/:idUsuario')
    .get((req, res) => {
        pedidoController.getPedidoByIdUsuario(req, res, db);
    })

    app.route('/confirmarPedido/:idPedido')
    .put((req, res) => {
        pedidoController.confirmarPedido(req, res, db);
    })
} 