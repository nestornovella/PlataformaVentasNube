import { DataTypes, Sequelize, UUIDV4 } from "sequelize";




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

    Store.associate = (models: any) =>{
        //asociaciones

        
    }

    return Store
}