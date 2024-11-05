import { NextRequest } from "next/server"
import sequelize, { checkConection } from "../DB/db"
import { error, response, statusCode } from "../DB/helpers/ResponseHelper.helper"
import { paramsInterface } from "../interface"
const {models} = sequelize



export async function getConfigurationStore (){
    await checkConection()
    try {
        const allConfig = await models.ConfigurationStore.findAll()
        return response(statusCode.creado, allConfig)
    } catch (error: any) {
        return response(statusCode.errorServidor, error.message)
    }
}

export async function createConfigurationStore (body){
    await checkConection()
    try {
        const config = await models.ConfigurationStore.create(body)

        return response(statusCode.creado, config)
    } catch (error:any) {
        return response(statusCode.errorServidor, error.message)
    }
}


export async function updateConfigStore(req:NextRequest,{ params }: paramsInterface) {

    try {
      await checkConection();
      const body = await req.json()
      const confStore:any = await models.ConfigurationStore.findByPk(params.id)
      const updateConfig = await confStore.update(body) 

      if(!updateConfig) error('no se logoro actualizar el storConfig')
      return {status:statusCode.actualizado, StoreId:confStore.StoreId}
    } catch (error: any) {
      return {status:statusCode.errorServidor}
    }
  
  }

