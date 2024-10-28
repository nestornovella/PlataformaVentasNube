import { DataTypes, Sequelize, UUIDV4 } from "sequelize";

const modelInstance = (sequelizeInstance:Sequelize | any) => {
  const Membership = sequelizeInstance.define('Membership', {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4
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

  Membership.associate = (models: any) => {
    console.log(models)
  }

  return Membership

}

export default modelInstance;