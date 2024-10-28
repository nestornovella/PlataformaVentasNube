import { DataTypes, Sequelize, UUIDV4 } from "sequelize";


const modelInstance = (sequelizeInstance: Sequelize | any) => {
    const Branch = sequelizeInstance.define('Branch', {
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: UUIDV4
        },
        address: {
            type: DataTypes.STRING,
        },
        manager: {
            type: DataTypes.JSON,
            validate: {
                isObject(value) {
                    if (typeof value !== 'object') {
                        throw new Error('configData debe ser un objeto JSON');
                    }
                },
            }
        },
        phoneNumber: {
            type: DataTypes.STRING,
        },
        active:{
            type:DataTypes.BOOLEAN
        }
    })

    Branch.associate = (models: any) => {
        console.log(models)


    }

    return Branch
}


export default modelInstance