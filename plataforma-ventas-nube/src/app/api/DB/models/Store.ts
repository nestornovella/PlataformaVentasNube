import { DataTypes, Sequelize, UUIDV4 } from "sequelize";
import { Database } from "../../interfaces";




const modelInstance = (sequelizeInstance:Sequelize | any)=>{
    const Store = sequelizeInstance.define('Store', {
        id:{
            primaryKey:true,
            type: DataTypes.UUID,
            defaultValue:UUIDV4
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        active:{
            type:DataTypes.BOOLEAN
        }
    })

    Store.associate = (models: Database) =>{
        Store.hasMany(models.Branch)//check
        Store.belongsTo(models.TypeBusiness)//check
        Store.hasOne(models.ConfigurationStore) //check
        Store.hasMany(models.Product)//check
        
    }

    return Store
}



export default modelInstance