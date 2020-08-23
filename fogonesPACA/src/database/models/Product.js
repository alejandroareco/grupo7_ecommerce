module.exports = function (sequelize, dataTypes){
    let alias = "Product"; //el nombre con el cual despues vamos a llamar al utilizar db. //

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        price: {
            type: dataTypes.FLOAT,
            allowNull: false
        },
        stock: {
            type: dataTypes.TEXT('tiny'),
            allowNull: true
        },
        description:  {
            type: dataTypes.STRING(100),
            allowNull: true
        }, //agregue los campos imagenes para saber que nommre tienen//
        image:  {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        image1:  {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        image2:  {
            type: dataTypes.STRING(100),
            allowNull: false
        },
    }
    
    let config = {
        tableName : "products", //nombre de la tabla //
        timestamps: false, //para saber las consultas de createdAt y updatedAt//
        underscored: true  //para permitir nombres de columnas que contengan guiones bajos //
    }

    let Product = sequelize.define(alias, cols, config);

    Product.associate = function(models){
        Product.belongsToMany(models.User, {
            as: 'elUser',
            through: 'client_product',
            foreignKey: 'product_id',
            otherKey: 'user_id',
            timestamps: false
        })
    }
    
    return Product;
} 