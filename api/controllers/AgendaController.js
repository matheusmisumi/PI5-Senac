'use strict';
exports.cadastrar = (req, res, db) => {
    db.pedido.create({
        idUsuario: req.body.idUsuario,
        idPrestador: req.body.idPrestador,
        idServico: req.body.idServico,
        dataPedido: req.body.dataPedido,
        dataPedido: req.body.dataPedido,
        valorPedido: req.body.valorPedido,
        statusPedido: req.body.statusPedido,
        confirmadoPedido: req.body.confirmadoPedido
    }).then( pedido => {
        res.status(200).json(pedido);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
};

exports.getOne = (req, res, db) => {
    db.pedido.findOne({
        where: {
            idPedido: req.params.id,
        }
    }).then(pedido => {
        res.status(200).json(pedido);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
};

exports.getAll = (req, res, db) => {
    db.pedido.findAll({
        where: {
            idUsuario: req.query.idUsuario,
            idPrestador: req.query.idPrestador
        },
        order: ['dataPedido', 'DESC']
    }).then(pedido => {
        res.status(200).json(pedido);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
};

exports.put = (req, res, db) => {
    db.pedido.find({
        where: {pedido: req.params.id}
    }).then(pedido => {
        return pedido.updateAttributes(req.body);
    }).then(pedidoAtualizado => {
        res.status(200).json(pedidoAtualizado);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
}