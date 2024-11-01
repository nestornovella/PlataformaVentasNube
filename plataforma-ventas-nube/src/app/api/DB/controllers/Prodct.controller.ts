import { NextRequest, NextResponse } from "next/server";
import sequelize, { checkConection } from "../db";
import { response, statusCode } from "../helpers/ResponseHelper.helper";
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

export async function getOneProduct(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const id = searchParams.get("id");

  if (!id) {
    return response(statusCode.badRequest, "el id del producto es requerido");
  }

  try {
    await checkConection();
    const product = await models.Product.findByPk(id);

    if (!product) {
      return response(statusCode.noEncontrado, "producto no encontrado");
    }

    return response(statusCode.aceptado, product);
  } catch (error: any) {
    return response(statusCode.errorServidor, error.message);
  }

}

export async function createProduct(req: NextRequest) {
  const productData = await req.json();

  if (!productData.name || !productData.images || !productData.price) {
    return response(statusCode.badRequest, "faltan datos");
  }

  try {
    await checkConection();
    const newProduct = await models.Product.create(productData);

    return response(statusCode.creado, newProduct);
  } catch (error: any) {
    return response(statusCode.errorServidor, error.message);
  }
}

export async function deleteProduct(req: NextRequest) {
  const { searchParams } = req.nextUrl; 
  const id = searchParams.get("id");

  if (!id) {
    return response(statusCode.badRequest, "el id del producto es requerido");
  }

  try {
    await checkConection();

    const product = await models.Product.destroy({
      where: { id },
    });

    if (product === 0) {
      return response(statusCode.noEncontrado, "producto no encontrado");
    }

    return response(statusCode.aceptado, { message: "producto eliminado correctamente" });
  } catch (error: any) {
    return response(statusCode.errorServidor, error.message);
  }
}