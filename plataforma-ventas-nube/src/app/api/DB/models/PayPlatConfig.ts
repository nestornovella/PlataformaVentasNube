import { DataTypes, Sequelize } from "sequelize";

const modelInstance = (sequelizeInstance: Sequelize | any) => {
  const PayPlatConfig = sequelizeInstance.define("PayPlatConfig", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
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
  
  PayPlatConfig.associate = (models:any) => {
    console.log(models)
  }

  return PayPlatConfig;
};

export default modelInstance;