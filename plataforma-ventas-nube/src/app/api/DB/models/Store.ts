import { DataTypes, Sequelize, UUIDV4 } from "sequelize";
import { Database } from "../../interfaces";




export default (sequelizeInstance:Sequelize | any)=>{
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
        //asociaciones

        
    }

    return Store
}