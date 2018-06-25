const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'hireme', 'root', '', {
        host: 'localhost',
        port: 3306,
        dialect: 'mysql'
    }
);

//Testando conexão com o banco
sequelize.authenticate().then( () => console.log("conexão realizada com sucesso"))
.catch( err => console.log("Não foi possível a conexão com o banco de dados. \n" + err));

const db = {
    Sequelize: Sequelize,
    sequelize: sequelize
};

//models
db.usuario = require('./models/Usuario')(sequelize, Sequelize);
db.prestador = require('./models/Prestador')(sequelize, Sequelize);
db.endereco = require('./models/Endereco')(sequelize, Sequelize);
db.dadosBancarios = require('./models/DadosBancario')(sequelize, Sequelize);
db.anuncio = require('./models/Anuncio')(sequelize, Sequelize);
db.avaliacao = require('./models/Avaliacao')(sequelize, Sequelize);
db.pedido = require('./models/Pedido')(sequelize, Sequelize);
db.transacao = require('./models/Transacao')(sequelize, Sequelize);
db.itemPedido = require('./models/ItemPedido')(sequelize, Sequelize);
db.servico = require('./models/Servico')(sequelize, Sequelize);
db.categoria = require('./models/Categoria')(sequelize, Sequelize);

module.exports = db;