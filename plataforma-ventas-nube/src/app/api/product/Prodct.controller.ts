import { NextRequest } from "next/server";
import sequelize, { checkConection } from "../DB/db";
import { error, response, statusCode } from "../DB/helpers/ResponseHelper.helper";
import { paramsInterface } from "../interface";
const { models } = sequelize;

export async function getProducts() {

  try {
    await checkConection();
    const productList = await models.Product.findAll();
    return response(statusCode.aceptado, productList);
  } catch (error: any) {
    return response(statusCode.noEncontrado, error.message);
  }
}

export async function getOneProduct({ params }: paramsInterface) {

  try {
    await checkConection();
    const product = await models.Product.findByPk(params.id);

    if (!product) {
      return response(statusCode.noEncontrado, "producto no encontrado");
    }

    return response(statusCode.aceptado, product);
  } catch (error: any) {
    return response(statusCode.errorServidor, error.message);
  }

}

export async function createProduct(req: NextRequest) {
  const body = await req.json();

  try {
    await checkConection();
    const { name, images, price } = body;
    if(!name || !images || !price) error("faltan parametros")
    await checkConection();
    const newProduct = await models.Product.create(body);
    if(!newProduct) error("no se pudo crear el producto")
    return response(statusCode.creado, newProduct);
  } catch (error: any) {
    return response(statusCode.errorServidor, error.message);
  }
}

export async function updateProduct(req: NextRequest,{ params }: paramsInterface) {
  const body = await req.json();

  try {
    await checkConection();
    const product = await models.Product.update(body, {where: { id: params.id },});

    if (!product) return response(statusCode.noEncontrado, "producto no encontrado");

    return response(statusCode.aceptado, { message: "producto actualizado correctamente" });
  } catch (error: any) {
    return response(statusCode.errorServidor, error.message);
  }
}