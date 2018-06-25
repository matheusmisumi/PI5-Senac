'use strict';

const LoginController = require('../../controllers/LoginController');
const db = require('../../dbFactory');
module.exports = (app) => {

    app.route('/login')
    .post((req, res) => {
        LoginController.login(req, res, db);
    })
}