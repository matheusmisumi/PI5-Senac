'use strict';
const app = require('./config/config');
const consign = require('consign');
consign()
    .include('api/controllers/')
    .into(app);

app.listen('3000', () => {
    console.log('Servidor rodando na porta 3000.')
});
