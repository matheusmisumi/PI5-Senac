'use strict';
exports.cadastrar = (req, res, db) => {
    db.servico.create({
        descricaoServico: req.body.descricaoServico,
        precoServico: req.body.precoServico,
        idPrestador: req.body.idPrestador,
        idCategoria: req.body.idCategoria
    }).then( servico => {
        res.status(200).json(servico);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
};

exports.get = (req, res, db) => {
    db.servicos.findOne({
        where: {
            idServico: req.params.id,
        }
    }).then(servico => {
        res.status(200).json(servico);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
};

exports.getPrestador = (req, res, db) => {
    db.servico.findAll({
        where: {
            idPrestador: req.params.idPrestador,
        }
    }).then(servicos => {
        res.status(200).json(servicos);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
};

exports.put = (req, res, db) => {
    db.servico.find({
        where: {idServico: req.params.idServico}
    }).then(servico => {
        return servico.updateAttributes(req.body);
    }).then(servicoAtualizado => {
        res.status(200).json(servicoAtualizado);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
};

exports.delete = (req, res, db) => {
    db.destroy({
        where: {idServico: id}
    }).then(servicoApagado => {
        res.status(200).json(servicoApagado);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
}


exports.getAll = (req, res, db) => {
    db.servicos.findAll({
        where: {
            idPrestador: req.params.id,
        }
    }).then(servico => {
        res.status(200).json(servico);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
};


exports.buscarPedido = (req, res, db) => {
    db.servico.find({
        where: {
            idServico: req.params.servico,
        }
    }).then(servico => {
        res.status(200).json(servico);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
};
