import { NextRequest } from "next/server"
import { paramsInterface } from "../../interface"
import { getCategoryById, updateCategory } from "../Category.controller"


export async function GET(req:NextRequest, params:paramsInterface){
  return getCategoryById(params)
}

export async function PUT(req:NextRequest, params:paramsInterface){
  return await updateCategory(req, params)
}