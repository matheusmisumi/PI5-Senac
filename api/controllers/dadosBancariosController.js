'use strict';
exports.cadastrar = (req, res, db) => {
    db.dadosBancarios.create({
        contaDadosBancario: req.body.contaDadosBancario,
        agenciaDadosBancario: req.body.agenciaDadosBancario,
        tipoDocumentoDadosBancario: req.body.tipoDocumentoDadosBancario,
        documentoDadosBancario: req.body.documentoDadosBancario
    }).then( dadosBancarios => {
        res.status(200).json(dadosBancarios);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
};

exports.get = (req, res, db) => {
    db.dadosBancarios.findOne({
        where: {
            idUsuario: req.query.idUsuario,
            idPrestador: req.query.idPrestador
        }
    }).then(usuario => {
        res.status(200).json(usuario);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
};

exports.put = (req, res, db) => {
    db.dadosBancarios.find({
        where: {idDadosBancarios: req.params.id}
    }).then(dadosBancarios => {
        return dadosBancarios.updateAttributes(req.body);
    }).then(dadosBancariosAtualizado => {
        res.status(200).json(dadosBancariosAtualizado);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
}