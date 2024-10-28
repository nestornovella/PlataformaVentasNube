import { DataTypes, Sequelize } from "sequelize";
import { Database } from "../../interfaces";

const modelInstance = (sequelizeInstance:Sequelize | any) => {
  const Membership = sequelizeInstance.define('Membership', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },

    name: {
      type: DataTypes.STRING
    },

    price: {
      type: DataTypes.FLOAT
    },

    currency: {
      type: DataTypes.ENUM("ARG, COL, USD"),
      defaultValue: "USD"
    },
  })

  Membership.associate = (models: Database) => {
    console.log(models)
  }

  return Membership

}

export default modelInstance;