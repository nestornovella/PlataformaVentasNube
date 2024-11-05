import { NextRequest } from "next/server";
import sequelize, { checkConection } from "../DB/db";
import { response, statusCode, error } from "../DB/helpers/ResponseHelper.helper";
import { paramsInterface } from "../interface";

const { models } = sequelize;

export async function getCategories() {
  try {
    await checkConection();
    const categories = await models.Category.findAll(
      {include: {
         model: models.Category,
          as: 'subCategories' 
        }
      });
    return response(statusCode.aceptado, categories);
  } catch (error: any) {
    return response(statusCode.noEncontrado, error.message);
  }
}

export async function getCategoryById({ params }: paramsInterface) {
  try {
    await checkConection();
    const category = await models.Category.findByPk(params.id)

    if (!category) {
      return response(statusCode.noEncontrado, "categoria no encontrada");
    }

    return response(statusCode.aceptado, category);
  } catch (error: any) {
    return response(statusCode.errorServidor, error.message);
  }
}

export async function addCategoryChild(body:{categoryId:string, subCategoryId:string}) {
  
  const { categoryId, subCategoryId } = body
  try {
    if (!categoryId || !subCategoryId) error('se requieren parametros categoryId y childId')
    const [mainCategory, child]: any = await Promise.all([
      models.Category.findByPk(categoryId),
      models.Category.findByPk(subCategoryId)
    ])
    console.log("main ->", mainCategory)
    console.log("child ->", child)
    if (!mainCategory || !child) error('no se encontraron las categorias en la base de datos')

    if (mainCategory && child) {
      await mainCategory.addSubCategory(child);
    }
    return response(statusCode.aceptado, "modelo asociado con exito")
  } catch (error: any) {
    return response(statusCode.errorServidor, error.message)
  }

}

export async function createCategory(body:{name:string}) {

  try {
    await checkConection();
    const { name } = body;
    if (!name) error("faltan parametros")
    const newCategory = await models.Category.create(body);
    if (!newCategory) error("no se pudo crear la actegoria")
    return response(statusCode.creado, newCategory);
  } catch (error: any) {
    return response(statusCode.errorServidor, error.message);
  }
}

export async function updateCategory(req: NextRequest, { params }: paramsInterface) {
  const body = await req.json();

  try {
    await checkConection();
    const category = await models.Category.update(body, { where: { id: params.id }, });

    if (!category) return response(statusCode.noEncontrado, "categoria no encontrada");

    return response(statusCode.aceptado, { message: "categoria actualizada correctamente" });
  } catch (error: any) {
    return response(statusCode.errorServidor, error.message);
  }
}
