import { NextRequest } from "next/server";
import sequelize, { checkConection } from "../DB/db";
import {
  error,
  response,
  responseError,
  statusCode,
} from "../DB/helpers/ResponseHelper.helper";
import { paramsInterface } from "../interface";

const { models } = sequelize;

export async function getAllUsers() {
  try {
    await checkConection();
    const users = await models.User.findAll();
    return response(statusCode.aceptado, users);
  } catch (error: any) {
    return responseError(500, error.message);
  }
}

export async function getUserById({ params }: paramsInterface) {
  try {
    await checkConection();
    const user = await models.User.findByPk(params.id);
    if (!user) error("usuario no creado error");
    return response(statusCode.aceptado, user);
  } catch (error: any) {
    return responseError(500, error.message);
  }
}

export async function updateUser(req: NextRequest,{ params }: paramsInterface) {
  try {
    await checkConection();
    const body = await req.json();
    const updated = await models.User.update(body, {
      where: { id: params.id },
    });

    if (!updated) error("usuario no creado error");
    return response(statusCode.aceptado, "se ha actualizado con exito");
  } catch (error: any) {
    return responseError(500, error.message);
  }
}

export async function createUser(req: NextRequest) {
  const body = await req.json();
  try {
    await checkConection();
    const { name, email, password } = body;
    if (!email || !name || !password)
      error("parametros requeridos no proporcionados");
    await checkConection();
    const user = await models.User.create(body);
    if (!user) error("No se pude crear el usuario");
    return response(statusCode.creado, "usuario creado");
  } catch (error: any) {
    return responseError(statusCode.errorServidor, error.message);
  }
}


