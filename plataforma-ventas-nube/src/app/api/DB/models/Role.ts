import { DataTypes, Sequelize, UUIDV4 } from "sequelize";
import { Database } from "../../interfaces";

const modelInstance = (sequelizeInstance:Sequelize | any)=>{
    const Role = sequelizeInstance.define('Role', {
        id:{
            primaryKey:true,
            type: DataTypes.UUID,
            defaultValue:UUIDV4
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        }
    })
    
    Role.associate = (models: Database) =>{
        //asociaciones
        console.log(models)
    }
    
    return Role
}
export default modelInstance