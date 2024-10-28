import { DataTypes, Sequelize, UUIDV4 } from "sequelize";
import { Database } from "../../interfaces";

const modelInstance = (sequelizeInstance:Sequelize | any)=>{
    const Product = sequelizeInstance.define('Product', {
        id:{
            primaryKey:true,
            type: DataTypes.UUID,
            defaultValue:UUIDV4
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        images:{
            type:DataTypes.ARRAY(DataTypes.STRING),
            allowNull:false,
        },
        price:{
            type:DataTypes.FLOAT,
            allowNull:false,
        },
        stock:{
            type:DataTypes.INTEGER,
            defaultValue:0,
            allowNull:false,
        },
      
        active:{
            type:DataTypes.BOOLEAN
        }
    })

    Product.associate = (models: Database) =>{
        Product.belongsToMany(models.User, { through: 'UserProject' })


    }

    return Product
}


export default modelInstance