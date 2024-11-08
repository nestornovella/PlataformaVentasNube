import { NextRequest } from "next/server";
import sequelize, { checkConection } from "../DB/db";
import {
  error,
  response,
  responseError,
  statusCode,
} from "../DB/helpers/ResponseHelper.helper";
import { paramsInterface } from "../interface";
import { PrismaClient } from "@prisma/client";

const { models } = sequelize;
const prisma = new PrismaClient()

export async function getAllUsers() {
  try {
    await checkConection();
    const users = await prisma.user.findMany()
    return response(statusCode.aceptado, users);
  } catch (error: any) {
    return responseError(500, error.message);
  }
}

export async function getUserById({ params }: paramsInterface) {
  try {
    await checkConection();
    const user = await prisma.user.findUnique({where:{
      id:params.id
    }})
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
    const updated = await prisma.user.update({

      where:{
        id: params.id
      },
      data:body
    })

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
    const user = await prisma.user.create({data:body});
    if (!user) error("No se pude crear el usuario");
    return response(statusCode.creado, "usuario creado");
  } catch (error: any) {
    return responseError(statusCode.errorServidor, error.message);
  }
}


