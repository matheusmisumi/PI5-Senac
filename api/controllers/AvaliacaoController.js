'use strict';
exports.cadastrar = (req, res, db) => {
    db.avaliacao.create({
        pontualidadeAvaliacao: req.body.pontualidadeAvaliacao,
        qualidadeAvaliacao: req.body.qualidadeAvaliacao,
        precoAvaliacao: req.body.precoAvaliacao,
        idUsuario: req.body.idUsuario,
        idPrestador: req.body.idPrestador
    }).then( usuario => {
        res.status(200).json(usuario);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
};

exports.get = (req, res, db) => {
    db.avaliacao.findAll({
        where: {
            $or: {
                idUsuario: req.query.idUsuario,
                idPrestador: req.query.idPrestador
            }
        }
        }).then(avaliacao => {
            res.status(200).json(avaliacao);
        }).catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
};