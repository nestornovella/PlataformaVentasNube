import { DataTypes, Sequelize, UUIDV4 } from "sequelize";

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
    
    Role.associate = (models) =>{
        //asociaciones
        Role.hasMany(models.User) //check

    }
    
    return Role
}
export default modelInstance