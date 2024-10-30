import { DataTypes, HasOne, Sequelize, UUIDV4 } from "sequelize";
import { Database } from "../../interfaces";


const modelInstance = (sequelizeInstance: Sequelize | any) => {
    const ConfigurationStore = sequelizeInstance.define('ConfigurationStore', {
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: UUIDV4
        },
        banner: {
            type: DataTypes.JSON,
            validate: {
                isObject(value) {
                    if (typeof value !== 'object') {
                        throw new Error('configData debe ser un objeto JSON');
                    }
                },
            }
        },
        footer: {
            type: DataTypes.JSON,
            validate: {
                isObject(value) {
                    if (typeof value !== 'object') {
                        throw new Error('configData debe ser un objeto JSON');
                    }
                },
            }
        },
        card: {
            type: DataTypes.JSON,
            validate: {
                isObject(value) {
                    if (typeof value !== 'object') {
                        throw new Error('configData debe ser un objeto JSON');
                    }
                },
            }
        },
        searchBar: {
            type: DataTypes.JSON,
            validate: {
                isObject(value) {
                    if (typeof value !== 'object') {
                        throw new Error('configData debe ser un objeto JSON');
                    }
                },
            }
        },

        cart: {
            type: DataTypes.JSON,
            validate: {
                isObject(value) {
                    if (typeof value !== 'object') {
                        throw new Error('configData debe ser un objeto JSON');
                    }
                },
            }
        }
    })

    ConfigurationStore.associate = (models: Database) => {
        ConfigurationStore.hasOne(models.Store) //check
        ConfigurationStore.hasMany(models.PayPlatConfig) //check
       


    }

    return ConfigurationStore
}


export default modelInstance