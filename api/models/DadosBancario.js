module.exports = (sequelize, DataTypes) => {
    const DadosBancario = sequelize.define('dadosBancario', {
        idDadosBancario: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        contaDadosBancario: DataTypes.INTEGER,
        agenciaDadosBancario: DataTypes.INTEGER,
        tipoDocumentoDadosBancario: DataTypes.STRING,
        documentoDadosBancario: DataTypes.INTEGER
    }, {
        timestamps: false,
        freezeTableName: true
    });

    return DadosBancario;
}