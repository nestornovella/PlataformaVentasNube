import { DataTypes, Sequelize, UUIDV4 } from "sequelize";
import { Database } from "../../interfaces";

const modelInstance = (sequelizeInstance: Sequelize | any) => {
  const PayPlatConfig = sequelizeInstance.define("PayPlatConfig", {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey:true,
    },

    credential: {
      type: DataTypes.JSON,
      validate: {
        isObject(value) {
          if (typeof value !== "object") {
            throw new Error("PayPlatConfig debe ser un objeto JSON");
          }
        },
      },
    },
  });
  PayPlatConfig.associate = (models:Database) => {
    console.log(models)
  }

  return PayPlatConfig;
};

export default modelInstance;