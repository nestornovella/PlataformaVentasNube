import { NextRequest } from "next/server";
import { updateConfigStore } from "../ConfigurationStore.controller";
import { paramsInterface } from "../../interface";
import { revalidatePath } from "next/cache";
import { response, statusCode } from "../../DB/helpers/ResponseHelper.helper";
import sequelize from "../../DB/db";




export async function  PUT (req:NextRequest, params){
    const res =  await updateConfigStore(req, params)
    if(res.status == statusCode.actualizado){
        const store:any = await sequelize.models.Store.findOne({where:{id:res.StoreId}})
        if(store){
            const path = encodeURI(`/${store.name}`)
            revalidatePath(path)
            console.log("se revalido la ruta", path)
        }
        return response(statusCode.actualizado, "se actualizo con exito")
    }
    return response(statusCode.errorServidor, 'no se logro actualizar la configuracion del store')   
  
}