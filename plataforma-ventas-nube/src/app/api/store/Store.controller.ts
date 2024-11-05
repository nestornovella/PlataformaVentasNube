import { NextRequest } from "next/server";
import sequelize, { checkConection } from "../DB/db";
import { error, response, statusCode } from "../DB/helpers/ResponseHelper.helper";
import { paramsInterface } from "../interface";


const { models } = sequelize;

export async function getStore() {
  try {
    await checkConection();
    const store = await models.Store.findAll({include:{model:models.ConfigurationStore}});
    return response(statusCode.aceptado, store);
  } catch (error: any) {
    return response(statusCode.noEncontrado, error.message);
  }
}

export async function getStoreById({ params }: paramsInterface) {
  try {
    await checkConection();
    const store = await models.Store.findOne({where:{name:params.name}, include:{model:models.ConfigurationStore}})

    if (!store) {
      return response(statusCode.noEncontrado, "store no encontrada");
    }

    return response(statusCode.aceptado, store);
  } catch (error:any) {
    return response(statusCode.errorServidor, error.message);
  }
}

export async function createStore(req: NextRequest) {
  const body = await req.json();

  try {
    await checkConection();
    const { name } = body;
    if(!name) error("faltan parametros")
    const [newStore, confStore]:any = await Promise.all([
      models.Store.create(body),
      models.ConfigurationStore.create({})
    ])
    if(!newStore) error("no se pudo crear la store")
    await newStore.setConfigurationStore(confStore)
    return response(statusCode.creado, newStore);
  } catch (error: any) {
    return response(statusCode.errorServidor, error.message);
  }
}

export async function updateStore(req: NextRequest,{ params }: paramsInterface) {
  const body = await req.json();

  try {
    await checkConection();
    const store = await models.Store.update(body, {where: { id: params.id },});

    if (!store) return response(statusCode.noEncontrado, "store no encontrada");

    return response(statusCode.aceptado, { message: "store actualizada correctamente" });
  } catch (error: any) {
    return response(statusCode.errorServidor, error.message);
  }
}
