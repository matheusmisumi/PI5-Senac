module.exports = (sequelize, DataTypes) => {
    const Endereco = sequelize.define('Endereco', {
        idEndereco: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        ruaEndereco: DataTypes.STRING,
        logradouroEndereco: DataTypes.STRING,
        complementoEndereco: DataTypes.STRING,
        estadoEndereco: DataTypes.STRING,
        cidadeEndereco: DataTypes.STRING,
        numeroEndereco: DataTypes.INTEGER,
        CEPEndereco: DataTypes.INTEGER,
        longitudeEndereco: DataTypes.DECIMAL,
        latitudeEndereco: DataTypes.DECIMAL,
        idUsuario: DataTypes.INTEGER
    }, {
        timestamps: false,
        freezeTableName: true
    });

    return Endereco;
}