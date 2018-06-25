module.exports = (sequelize, DataTypes) => {
    const Categoria = sequelize.define('Categoria', {
        idCategoria: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nomeCategoria: DataTypes.STRING
    }, {
        timestamps: false,
        freezeTableName: true
    });

    return Categoria;
}