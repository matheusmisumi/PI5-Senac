'use strict';

exports.login = (req, res, db) => {

    db.usuario.findOne({
        where:{
            emailUsuario: req.body.emailUsuario,
            senhaUsuario: req.body.senhaUsuario
        }
    }).then(user => {
        if(req.body.emailUsuario === user.emailUsuario && req.body.senhaUsuario === user.senhaUsuario){
            res.status(200).json(user);
        }
    }).catch((err) => {
        res.status(404).json({
            msg: 'User not found.'
        });
    });
}