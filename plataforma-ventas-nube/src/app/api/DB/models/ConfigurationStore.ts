import { DataTypes, Sequelize, UUIDV4 } from "sequelize";



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
            },
            defaultValue:{}
        },
        footer: {
            type: DataTypes.JSON,
            validate: {
                isObject(value) {
                    if (typeof value !== 'object') {
                        throw new Error('configData debe ser un objeto JSON');
                    }
                },
            },
            defaultValue:{}
        },
        card: {
            type: DataTypes.JSON,
            validate: {
                isObject(value) {
                    if (typeof value !== 'object') {
                        throw new Error('configData debe ser un objeto JSON');
                    }
                },
            },
            defaultValue:{}
        },
        searchBar: {
            type: DataTypes.JSON,
            validate: {
                isObject(value) {
                    if (typeof value !== 'object') {
                        throw new Error('configData debe ser un objeto JSON');
                    }
                },
            },
            defaultValue:{}
        },

        cart: {
            type: DataTypes.JSON,
            validate: {
                isObject(value) {
                    if (typeof value !== 'object') {
                        throw new Error('configData debe ser un objeto JSON');
                    }
                },
            },
            defaultValue:{}
        }
    })

    ConfigurationStore.associate = (models) => {
        ConfigurationStore.hasOne(models.Store) //check
        ConfigurationStore.hasMany(models.PayPlatConfig) //check
       


    }

    return ConfigurationStore
}


export default modelInstance