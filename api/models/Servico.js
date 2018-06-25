module.exports = (sequelize, DataTypes) => {
    const Servico = sequelize.define('Servico', {
        idServico: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        descricaoServico: DataTypes.STRING,
        precoServico: DataTypes.DECIMAL,
        idPrestador: DataTypes.INTEGER,
        idCategoria: DataTypes.INTEGER
    }, {
        timestamps: false,
        freezeTableName: true
    });

    return Servico;
}