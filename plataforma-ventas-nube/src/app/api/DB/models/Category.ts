import { DataTypes, Sequelize, UUIDV4 } from "sequelize";
import { Database } from "../../interfaces";

const modelInstance = (sequelizeInstance: Sequelize | any) => {
  const Category = sequelizeInstance.define("Category", {
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

  Category.associate = (models: Database) => {
    console.log(models)
  }

  return Category;
}
 export default modelInstance;
