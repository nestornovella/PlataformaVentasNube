import { DataTypes, Sequelize, UUIDV4 } from "sequelize";
import { Database } from "../../interfaces";

const modelInstance = (sequelizeInstance:Sequelize | any) => {
  const PaymentPlatform = sequelizeInstance.define("PaymentPlatform", {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey:true,
    },

    name: {
      type: DataTypes.STRING
    },

    currency: {
      type:DataTypes.STRING
    },

    active: {
      type: DataTypes.BOOLEAN
    }
    
  });
  PaymentPlatform.associate = (models: Database) => {
    console.log(models)
  }

  return PaymentPlatform;
}

export default modelInstance;