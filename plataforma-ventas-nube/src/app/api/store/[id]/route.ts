import { NextRequest } from "next/server";
import { paramsInterface } from "../../DB/controllers/interface/interface";
import { getStoreById, updateStore } from "../../DB/controllers/Store.controller";


export async function GET(req:NextRequest, params:paramsInterface){
  return getStoreById(params);
}

export async function PUT(req:NextRequest, params:paramsInterface){
  return await updateStore(req, params);
}