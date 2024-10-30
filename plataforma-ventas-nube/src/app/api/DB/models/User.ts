import { DataTypes, Sequelize } from "sequelize";
import { Database } from "../../interfaces";

const modelInstance = (sequelizeInstance:Sequelize | any)=>{
    const User = sequelizeInstance.define('User', {
        id:{
            primaryKey:true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        password:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        avatar:{
            type:DataTypes.TEXT
        },
        active:{
            type:DataTypes.BOOLEAN,
            defaultValue: true
        }
    })
    
    User.associate = (models: Database) =>{
        //asociaciones
        User.hasOne(models.Membership)
    }
    
    return User
}
export default modelInstance