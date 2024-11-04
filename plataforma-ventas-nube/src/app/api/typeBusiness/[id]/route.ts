import { NextRequest } from "next/server";
import { paramsInterface } from "../../DB/controllers/interface/interface";
import { getTypeBusinessById, updateTypeBusiness } from "../../DB/controllers/TypeBusiness.controller";


export async function GET(req:NextRequest, params:paramsInterface){
  return getTypeBusinessById(params);
}

export async function PUT(req:NextRequest, params:paramsInterface){
  return await updateTypeBusiness(req, params);
}