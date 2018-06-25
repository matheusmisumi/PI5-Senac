'use strict';
exports.cadastrar = (req, res, db) => {
    db.endereco.create({
        ruaEndereco: req.body.ruaEndereco,
        logradouroEndereco: req.body.logradouroEndereco,
        complementoEndereco: req.body.complementoEndereco,
        estadoEndereco: req.body.estadoEndereco,
        cidadeEndereco: req.body.cidadeEndereco,
        numeroEndereco: req.body.numeroEndereco,
        CEPEndereco: req.body.CEPEndereco,
        longitudeEndereco: req.body.longitudeEndereco,
        latitudeEndereco: req.body.latitudeEndereco,
        idUsuario: req.body.idUsuario
    }).then( endereco => {
        res.status(200).json(endereco);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
};

exports.getUsuario = (req, res, db) => {
    db.endereco.findAll({
        where: {
            idUsuario: req.params.id
        }
    }).then(enderecos => {
        res.status(200).json(enderecos);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
};

exports.get = (req, res, db) => {
    db.endereco.findAll({
        where: {
            idEndereco: req.params.id
        }
    }).then(enderecos => {
        res.status(200).json(enderecos);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
};

exports.put = (req, res, db) => {
    db.endereco.find({
        where: {idEndereco: req.params.id}
    }).then(endereco => {
        return endereco.updateAttributes(req.body);
    }).then(enderecoAtualizado => {
        res.status(200).json(enderecoAtualizado)
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
}

exports.delete = (req, res, db) => {
    db.endereco.destroy({
        where: {idEndereco: req.params.id}
    }).then(enderecoApagado => {
        res.status(200).json(enderecoApagado)
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
}