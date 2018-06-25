const db = require('../../dbFactory');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = (app) => {
    
    app.post('/trocarSenha', (req, res) => {
        
        const oldPassword = req.body.oldPassword;
        const newPassword = req.body.newPassword;
        const emailUsuario = req.body.emailUsuario;

        db.usuario.find({
            where: {
                emailUsuario: req.body.emailUsuario,
                [Op.and]: {senhaUsuario: oldPassword}
            }
        }).then(usuario => {
            return usuario.update({
                senhaUsuario: newPassword
            },
            {
                returning: true,
                where: {
                    emailUsuario : req.body.emailUsuario
                }
            });
        }).then(usuarioAtualizado => {
            res.status(200).json({msg: "Senha alterada com sucesso!"})
        }).catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
        
    });
}