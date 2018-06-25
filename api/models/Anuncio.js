module.exports = (sequelize, DataTypes) => {
    const Anuncio = sequelize.define('dadosBancario', {
        idAnuncio: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        tituloAnuncio: DataTypes.STRING,
        descricaoAnuncio: DataTypes.STRING,
        idUsuario: DataTypes.INTEGER
    }, {
        timestamps: false,
        freezeTableName: true
    });

    return Anuncio;
}