import { NextRequest } from "next/server";
import sequelize, { checkConection } from "../db";
import { response, statusCode, error } from "../helpers/ResponseHelper.helper";
import { paramsInterface } from "./interface/interface";

const { models } = sequelize;

export async function getTypeBusiness() {
  try {
    await checkConection();
    const typeBisness = await models.TypeBusiness.findAll()
    return response(statusCode.aceptado, typeBisness);
  } catch (error: any) {
    return response(statusCode.noEncontrado, error.message);
  }
}

export async function getTypeBusinessById({ params }: paramsInterface) {
  try {
    await checkConection();
    const typeBisness = await models.TypeBusiness.findByPk(params.id)

    if (!typeBisness) {
      return response(statusCode.noEncontrado, "tipo de negocio no encontrado");
    }

    return response(statusCode.aceptado, typeBisness);
  } catch (error:any) {
    return response(statusCode.errorServidor, error.message);
  }
}

export async function createTypeBusiness(req: NextRequest) {
  const body = await req.json();

  try {
    await checkConection();
    const { name } = body;
    if(!name) error("faltan parametros")
    await checkConection();
    const newTypeBusiness = await models.TypeBusiness.create(body);
    if(!newTypeBusiness) error("no se pudo crear el tipo de negocio")
    return response(statusCode.creado, newTypeBusiness);
  } catch (error: any) {
    return response(statusCode.errorServidor, error.message);
  }
}

export async function updateTypeBusiness(req: NextRequest,{ params }: paramsInterface) {
  const body = await req.json();

  try {
    await checkConection();
    const typeBisness = await models.TypeBusiness.update(body, {where: { id: params.id },});

    if (!typeBisness) return response(statusCode.noEncontrado, "tipo de negocio no encontrado");

    return response(statusCode.aceptado, { message: "tipo de negocio actualizado correctamente" });
  } catch (error: any) {
    return response(statusCode.errorServidor, error.message);
  }
}
