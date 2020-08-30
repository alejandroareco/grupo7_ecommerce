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
            allowNull: true
        },
        lastname: {
            type: dataTypes.STRING(100),
            allowNull: true
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        passw:  {
            type: dataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        address:  {
            type: dataTypes.TEXT,
            allowNull: true
        },
        phone: {
            type: dataTypes.STRING(100),
            allowNull: true
        },
        avatar: {
            type: dataTypes.STRING(100),
            allowNull: true
        },
    }
    
    let config = {
        tableName : "users", //nombre de la tabla //
        timestamps: false, //para saber las consultas de createdAt y updatedAt//
        underscored: true  //para permitir nombres de columnas que contengan guiones bajos //
    }

    let User = sequelize.define(alias, cols, config);

    User.associate = function(models){
        User.belongsToMany(models.Product, {
            as: 'elProducto',
            through: 'client_product',
            foreignKey: 'user_id',
            otherKey: 'product_id',
            timestamps: false
        })
    }
    
    return User;
} 