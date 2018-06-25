module.exports = (sequelize, DataTypes) => {
    const Avaliacao = sequelize.define('Avaliacao', {
        idAvaliacao: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        pontualidadeAvaliacao: DataTypes.INTEGER,
        qualidadeAvaliacao: DataTypes.INTEGER,
        precoAvaliacao: DataTypes.INTEGER,
        idUsuario: DataTypes.INTEGER,
        idPrestador: DataTypes.INTEGER
    }, {
        timestamps: false,
        freezeTableName: true
    });

    return Avaliacao;
}