import { DataTypes, Sequelize, UUIDV4 } from "sequelize";
import { Database } from "../../interfaces";

const modelInstance = (sequelizeInstance:Sequelize | any)=>{
    const User = sequelizeInstance.define('User', {
        id:{
            primaryKey:true,
            type: DataTypes.UUID,
            defaultValue:UUIDV4
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
            type:DataTypes.BOOLEAN
        }
    })
    
    User.associate = (models: Database) =>{
        //asociaciones
        User.belongsToMany(models.Product, { through: 'UserProject' })
        
    }
    
    return User
}
export default modelInstance