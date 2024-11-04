import { NextRequest } from "next/server";
import sequelize, { checkConection } from "../db";
import { response, statusCode, error } from "../helpers/ResponseHelper.helper";
import { paramsInterface } from "./interface/interface";

const { models } = sequelize;

export async function getStore() {
  try {
    await checkConection();
    const store = await models.Store.findAll();
    return response(statusCode.aceptado, store);
  } catch (error: any) {
    return response(statusCode.noEncontrado, error.message);
  }
}

export async function getStoreById({ params }: paramsInterface) {
  try {
    await checkConection();
    const store = await models.Store.findByPk(params.id)

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
    await checkConection();
    const newStore = await models.Store.create(body);
    if(!newStore) error("no se pudo crear la store")
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
