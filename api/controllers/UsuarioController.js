'use strict';
const PrestadorController = require('./PrestadorController');
const {token} = require('../lib/security');
exports.cadastrar = (req, res, db) => {
    db.usuario.create({
        ativoUsuario: true,        
        nomeUsuario: req.body.nomeUsuario,
        sobrenomeUsuario: req.body.sobrenomeUsuario,
        emailUsuario: req.body.emailUsuario,
        senhaUsuario: req.body.senhaUsuario,
        CPFUsuario: req.body.CPFUsuario,
        celularUsuario: req.body.celularUsuario,
        tokenCartaoUsuario: token(),
        nascimentoUsuario: req.body.nascimentoUsuario,
    }).then( usuario => {
        res.status(200).json(usuario);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
};

exports.get = (req, res, db) => {
    db.usuario.findOne({
        where: {
            idUsuario: req.params.id
        }
    }).then(usuario => {
        res.status(200).json(usuario);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
};

exports.atualizar = (req, res, db) => {
    db.usuario.find({
        where: {idUsuario: req.params.id}
    }).then(usuario => {
        return usuario.updateAttributes(req.body);
    }).then(usuarioAtualizado => {
        res.status(200).json(usuarioAtualizado)
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
};