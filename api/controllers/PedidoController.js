'use strict';
exports.cadastrar = (req, res, db) => {
    db.pedido.create({
        confirmadoPedido: false,
        valorPedido: req.body.valorPedido,
        dataPedido: req.body.dataPedido,
        idUsuario: req.body.idUsuario,
        idPrestador: req.body.idPrestador,
        idServico: req.body.idServico,
        statusPedido: 'pendente'
    }).then(pedido => {
        res.status(201).json(pedido);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
};


exports.getOne = (req, res, db) => {
    db.pedido.findOne({
        where: {
            idPedido: req.params.idPedido,
        }
    }).then(pedido => {
        res.status(302).json(pedido);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
};

exports.getAll = (req, res, db) => {
    db.pedido.findAll().then(pedidos => {
        res.status(302).json(pedidos);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
};

exports.atualizaPedido = (req, res, db) => {
    db.pedido.find({
        where: {pedido: req.params.idPedido}
    }).then(pedido => {
        return categoria.updateAttributes(req.body);
    }).then(pedidoAtualizado => {
        res.status(200).json(pedidoAtualizado);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
}

exports.getPedidoByIdPrestador = (req, res, db) => {
    db.pedido.findAll({
        where: {idPrestador: req.params.idPrestador}
    }).then((pedidos) => {
        res.status(200).json(pedidos);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
    })
}

exports.getPedidoByIdUsuario = (req, res, db) => {
    db.pedido.findAll({
        where: {idUsuario: req.params.idUsuario}
    }).then((pedidos) => {
        res.status(200).json(pedidos);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
    })
}


exports.confirmarPedido = (req, res, db) => {
    db.pedido.find({
        where: {idPedido: req.params.idPedido}
    }).then(pedido => {
        return pedido.updateAttributes(req.body);
    }).then(pedidoAtualizado => {
        res.status(200).json(pedidoAtualizado);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
}
