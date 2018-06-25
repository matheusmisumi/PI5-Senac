'use strict';
const geolib = require('geolib');

exports.cadastrar = (req, res, db) => {
    db.prestador.create({
        latitudePrestador: req.body.latitudePrestador,
        longitudePrestador: req.body.longitudePrestador,
        idUsuario: req.body.idUsuario,
        idEndereco: req.body.idEndereco,
        idDadosBancario: req.body.idDadosBancario
    }).then( prestador => {
        res.status(200).json(prestador);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
};

exports.get = (req, res, db) => {
    db.prestador.findOne({
        where: {
            $or: {
                idUsuario: req.query.idUsuario,
                idPrestador: req.query.idPrestador
            }
        }
        }).then(prestador => {
            res.status(200).json(prestador);
        }).catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
};

exports.getPrestadores = (req, res, db) => {
    let lat = req.query.lat;
    let lon = req.query.lon;
    let raio = 5000;
    if (req.query.raio){
        raio = req.query.raio;
    }
    let prestadoresProximos = [];
    db.prestador.findAll().then(prestadores => {     
        for (let prestador of prestadores) {
            prestador = prestador.dataValues;
            let prestadorLat = prestador.latitudePrestador;
            let prestadorLon = prestador.longitudePrestador;
            let estaProximo = geolib.isPointInCircle(
                {latitude: lat, longitude: lon},
                {latitude: prestadorLat, longitude: prestadorLon},
                raio
            );
            if (estaProximo) prestadoresProximos.push(prestador);
        }
        res.status(200).json(prestadoresProximos);
    });
};

exports.atualizar = (req, res, db) => {
    db.prestador.find({
        where: {idPrestador: req.params.id}
    }).then(prestador => {
        return prestador.updateAttributes(req.body);
    }).then(prestadorAtualizado => {
        res.status(200).json(prestadorAtualizado)
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
};