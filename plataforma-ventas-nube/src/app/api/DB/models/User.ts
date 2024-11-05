import { DataTypes, Sequelize } from "sequelize";

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
        email:{
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
            defaultValue:true
        }
    })
    
    User.associate = (models) =>{
        //asociaciones
        User.hasOne(models.Membership)//check
        User.belongsTo(models.Role)//check
        User.hasMany(models.Store)//check
    }
    
    return User
}
export default modelInstance