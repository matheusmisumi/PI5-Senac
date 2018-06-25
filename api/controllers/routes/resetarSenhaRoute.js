'use strict';
const nodemailer = require('nodemailer');
const { token } = require('../../lib/security');
const db = require('../../dbFactory');

module.exports = (app) => {

    app.post('/resetarSenha', (req, res) => {

        nodemailer.createTestAccount((err, account) => {
            let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false,
                auth: {
                    user: 'hireme.senacpi5@gmail.com',
                    pass: 'hireme123' 
                }
            });  
            const newPass = token();

            db.usuario.find({
                where: {emailUsuario: req.body.emailUsuario}
            }).then(usuario => {
                return usuario.update({
                    senhaUsuario: newPass
                },
                {
                    returning: true,
                    where: {
                        emailUsuario : req.body.emailUsuario
                    }
                });
            }).then(usuarioAtualizado => {
                            
            let mailOptions = {
                from: 'hireme.senacpi5@gmail.com', // sender address
                to: req.body.emailUsuario, // list of receivers
                subject: 'Solicitação de redefinição de senha', // Subject line
                text: `Essa é sua nova senha: ${newPass}`, // plain text body
            };

                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        return res.status(500).json({erro: error})
                    }
                });
                res.status(200).json({msg: "E-mail enviado com sucesso!"})
            }).catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
            return res.status(404).json({msg: "Usuario não encontrado."})
        });
    });
}