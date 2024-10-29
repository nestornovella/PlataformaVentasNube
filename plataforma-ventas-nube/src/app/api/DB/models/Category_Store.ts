import { DataTypes, Sequelize, UUIDV4 } from "sequelize";
import { Database } from "../../interfaces";

const modelInstance = (sequelizeInstance: Sequelize | any) => {
  const Category_Store = sequelizeInstance.define("Category_Store", {
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
  
  Category_Store.associate = (models: Database) => {
    console.log(models)
  }

  return Category_Store;
}

export default modelInstance;