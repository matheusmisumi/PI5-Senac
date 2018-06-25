'use strict';
exports.cadastrar = (req, res, db) => {
    db.categoria.create({
        nomeCategoria: req.body.nomeCategoria,
    }).then( categoria => {
        res.status(200).json(categoria);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
};

exports.getOne = (req, res, db) => {
    db.categoria.findOne({
        where: {
            idCategoria: req.params.id,
        }
    }).then(categoria => {
        res.status(200).json(categoria);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
};

exports.getAll = (req, res, db) => {
    db.categoria.findAll().then(categoria => {
        res.status(200).json(categoria);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
};

exports.put = (req, res, db) => {
    db.categoria.find({
        where: {categoria: req.params.id}
    }).then(categoria => {
        return categoria.updateAttributes(req.body);
    }).then(categoriaAtualizada => {
        res.status(200).json(categoriaAtualizada);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
}
