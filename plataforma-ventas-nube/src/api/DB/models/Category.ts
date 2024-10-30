import { DataTypes, Sequelize, UUIDV4 } from "sequelize";
import { Database } from "../../interfaces";

const modelInstance = (sequelizeInstance: Sequelize | any) => {
  const Category = sequelizeInstance.define("Category", {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  Category.associate = (models: Database) => {
    Category.belongsToMany(models.TypeBusiness, { through: "Category-typeBusiness" }) //cheked
    Category.belongsToMany(models.Product, { through: "Product-category" }) // cheked
    Category.hasMany(models.Category, {
      as: 'subCategories',
      foreignKey: 'parentId',
    });
    Category.belongsTo(models.Category, {
      as: 'parentCategory',
      foreignKey: 'parentId',
    });
  }

  return Category;
}
export default modelInstance;
