module.exports = (sequelize, DataTypes) => {
    const Transacao = sequelize.define('Transacao', {
        idTransacao: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        idUsuario: DataTypes.INTEGER,
        idPrestador: DataTypes.INTEGER,
        valor: DataTypes.DECIMAL
    }, {
        timestamps: false,
        freezeTableName: true
    });

    return Transacao;
}