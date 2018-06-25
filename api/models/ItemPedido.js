module.exports = (sequelize, DataTypes) => {
    const itemPedido = sequelize.define('itemPedido', {
        idItemPedido: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        idPedido: DataTypes.INTEGER,
        idServico: DataTypes.INTEGER
    }, {
        timestamps: false,
        freezeTableName: true
    });

    return itemPedido;
}