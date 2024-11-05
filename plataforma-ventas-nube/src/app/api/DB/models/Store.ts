import { DataTypes, Sequelize, UUIDV4 } from "sequelize";




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
            type:DataTypes.BOOLEAN,
            defaultValue:true
        }
    })

    Store.associate = (models) =>{
        Store.hasMany(models.Branch)//check
        Store.belongsTo(models.TypeBusiness)//check
        Store.hasOne(models.ConfigurationStore) //check
        Store.hasMany(models.Product)//check
        Store.belongsTo(models.User) //check
        
    }

    return Store
}



export default modelInstance