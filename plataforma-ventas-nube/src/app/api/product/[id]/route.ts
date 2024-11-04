import { NextRequest } from "next/server"
import { paramsInterface } from "../../DB/controllers/interface/interface"
import { getOneProduct, updateProduct } from "../../DB/controllers/Prodct.controller"


export async function GET(req:NextRequest, params:paramsInterface){
  return getOneProduct(params)
}

export async function PUT(req:NextRequest, params:paramsInterface){
  return await updateProduct(req, params)
}