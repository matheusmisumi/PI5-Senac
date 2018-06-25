module.exports = (sequelize, DataTypes) => {
    const Pedido = sequelize.define('Pedido', {
        idPedido: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        idUsuario: DataTypes.INTEGER,
        idPrestador: DataTypes.INTEGER,
        idServico: DataTypes.INTEGER,
        valorPedido: DataTypes.INTEGER,
        dataPedido: DataTypes.STRING,
        statusPedido: DataTypes.STRING,
        confirmadoPedido: DataTypes.BOOLEAN
    }, {
        timestamps: false,
        freezeTableName: true
    });

    return Pedido;
}