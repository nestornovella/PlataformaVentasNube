import { NextRequest } from "next/server";
import { paramsInterface } from "../../interface";
import { getStoreById, updateStore } from "../Store.controller";



export async function GET(req:NextRequest, params:paramsInterface){
  return getStoreById(params);
}

export async function PUT(req:NextRequest, params:paramsInterface){
  return await updateStore(req, params);
}