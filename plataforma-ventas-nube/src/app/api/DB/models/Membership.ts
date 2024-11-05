import { DataTypes, Sequelize, UUIDV4 } from "sequelize";

const modelInstance = (sequelizeInstance:Sequelize | any) => {
  const Membership = sequelizeInstance.define('Membership', {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey:true,
    },

    name: {
      type: DataTypes.STRING
    },

    price: {
      type: DataTypes.FLOAT
    },

    currency: {
      type: DataTypes.ENUM("ARG", "COP", "USD"),
      defaultValue: "USD"
    },
  })

  Membership.associate = (models) => {
    Membership.hasOne(models.User) //check
  }

  return Membership

}

export default modelInstance;