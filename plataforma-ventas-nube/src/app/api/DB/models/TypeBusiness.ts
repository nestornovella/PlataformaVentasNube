import { DataTypes, Sequelize, UUIDV4 } from "sequelize";
import { Database } from "../../interfaces";

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
  
  TypeBusiness.associate = (models: Database) => {
    TypeBusiness.belongsToMany(models.Category, {through:"Category-typeBusiness"})
    
  }

  return TypeBusiness;
}

export default modelInstance;