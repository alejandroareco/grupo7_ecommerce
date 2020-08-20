module.exports = function (sequelize, dataTypes){
    let alias = "User"; //el nombre con el cual despues vamos a llamar al utilizar db. //

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstname: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        lastname: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: true
        },
        passw:  {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        address:  {
            type: dataTypes.TEXT,
            allowNull: false
        },
        phone: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
    }
    
    let config = {
        tableName : "users", //nombre de la tabla //
        timestamps: false, //para saber las consultas de createdAt y updatedAt//
        underscored: true  //para permitir nombres de columnas que contengan guiones bajos //
    }

    let User = sequelize.define(alias, cols, config);
    return User;
} 