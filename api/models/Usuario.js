module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
        idUsuario: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nomeUsuario: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sobrenomeUsuario: {
            type: DataTypes.STRING,
            allowNull: false
        },
        emailUsuario: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isUnique(value, next) {
                  Usuario.find({
                    where: { emailUsuario: value },
                    attributes: ['emailUsuario']
                  }).done((user) => {
                    if (user)
                      return next('Email já cadastrado');
                    next();
                  });
                }
            },
        },
        senhaUsuario: {
            type: DataTypes.STRING,
            allowNull: false
        },
        CPFUsuario: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isUnique(value, next) {
                  Usuario.find({
                    where: { CPFUsuario: value },
                    attributes: ['CPFUsuario']
                  }).done((user) => {
                    if (user)
                      return next('CPF já cadastrado');
                    next();
                  });
                }
            },
        },
        celularUsuario: {
            type: DataTypes.STRING,
            validate: {
                isUnique(value, next) {
                  Usuario.find({
                    where: { celularUsuario: value },
                    attributes: ['celularUsuario']
                  }).done((user) => {
                    if (user)
                      return next('Celular já cadastrado');
                    next();
                  });
                }
            },
        },
        ativoUsuario: {
            type: DataTypes.TINYINT,
            allowNull: false,
            defaultValue: 0
        },
        tokenCartaoUsuario: DataTypes.STRING,
        nascimentoUsuario: DataTypes.DATE,
        ativoUsuario: DataTypes.BOOLEAN,
    }, {
        timestamps: false,
        freezeTableName: true
    });

    return Usuario;
}