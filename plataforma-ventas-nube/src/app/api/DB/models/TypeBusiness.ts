import { DataTypes, Sequelize, UUIDV4 } from "sequelize";

const modelInstance = (sequelizeInstance: Sequelize | any) => {
  const TypeBusiness = sequelizeInstance.define("TypeBusiness", {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey:true, 
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
  
  TypeBusiness.associate = (models) => {
    TypeBusiness.belongsToMany(models.Category, {through:"Category-typeBusiness"})
    TypeBusiness.hasMany(models.Store)
  }

  return TypeBusiness;
}

export default modelInstance;