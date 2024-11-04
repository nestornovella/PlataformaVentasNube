import { NextRequest } from "next/server"
import { paramsInterface } from "../../DB/controllers/interface/interface"
import { getCategoryById, updateCategory } from "../../DB/controllers/Category.controller"


export async function GET(req:NextRequest, params:paramsInterface){
  return getCategoryById(params)
}

export async function PUT(req:NextRequest, params:paramsInterface){
  return await updateCategory(req, params)
}