module.exports = (sequelize, DataTypes) => {
    const Prestador = sequelize.define('Prestador', {
        idPrestador: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        latitudePrestador: DataTypes.INTEGER,
        longitudePrestador: DataTypes.INTEGER,
        idUsuario: DataTypes.INTEGER,
        idEndereco: DataTypes.INTEGER,
        idDadosBancario: DataTypes.INTEGER
    }, {
        timestamps: false,
        freezeTableName: true
    });

    return Prestador;
}