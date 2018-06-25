'use strict';
const crypto = require('crypto');
const secret = 'thisisverysecret';
module.exports = {

    validateRequest : (req) => {
        req.assert("name", "O nome do usuário é obrigatório.").notEmpty();
        req.assert("lastname", "O email do usuário é obrigatório").notEmpty();
        req.assert("email", "O email do usuário é inválido.").isEmail();
        req.assert("password", "A senha é obrigatória.").notEmpty();
        req.assert("cpf", "A senha é obrigatória.").notEmpty();
        req.assert("cellphone", "A senha é obrigatória.").notEmpty();
        req.assert("birthDate", "A data de nascimento obrigatória.").notEmpty();
        return req.validationErrors();    
    },
    token: () => crypto.createHmac('sha256', secret).digest('hex'),
}