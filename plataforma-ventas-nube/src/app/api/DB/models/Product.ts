import { DataTypes, Sequelize, UUIDV4 } from "sequelize";

const modelInstance = (sequelizeInstance: Sequelize | any) => {
    const Product = sequelizeInstance.define('Product', { //{"name","images","price","stock","active"}
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        images: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        stock: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: true,
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue:false
        },
       
    });

    Product.associate = (models) => {
        Product.belongsToMany(models.Category, { through: "Product-category" }); // verificado
        Product.belongsTo(models.Store); // verificado
        
        // Relación jerárquica
        Product.belongsTo(models.Product, { as: 'parent', foreignKey: 'parentId' });
        Product.hasMany(models.Product, { as: 'subProductos', foreignKey: 'parentId' });
    };

    return Product;
};

export default modelInstance;