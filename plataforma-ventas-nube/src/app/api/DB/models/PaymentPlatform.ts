import { DataTypes, Sequelize, UUIDV4 } from "sequelize";

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
      type: DataTypes.BOOLEAN,
      defaultValue:true
    }
    
  });
  PaymentPlatform.associate = (models) => {
    PaymentPlatform.hasMany(models.PayPlatConfig)//check
  }

  return PaymentPlatform;
}

export default modelInstance;