import { NextRequest } from "next/server";
import sequelize, { checkConection } from "../DB/db";
import { response, statusCode } from "../DB/helpers/ResponseHelper.helper";
import { paramsInterface } from "../interface";
const {models} = sequelize;

export async function getBranch (){
  try {
    await checkConection();
    const branch = await models.Branch.findAll();
    return response(statusCode.aceptado, branch);
  } catch (error: any) {
    return response(statusCode.errorServidor, error.message);
  }
}

export async function getBranchById({params}: paramsInterface) {
  try {
    await checkConection();
    const branch = await models.Branch.findByPk(params.id);
    if(!branch) return response(statusCode.noEncontrado, "no existe la sucursal");
    return response(statusCode.aceptado, branch);
  } catch (error: any) {
    return response(statusCode.errorServidor, error.message);
  }
}

/* export async function createBranch(req: NextRequest) {
  const body = await req.json();
  
  try {
    await checkConection();
    
  } catch (error) {
    
  }
} */