import { NextRequest } from "next/server";
import { getUserById, updateUser } from "../User.controller";
import { paramsInterface } from "../../interface";



export async function GET(req:NextRequest, params:paramsInterface){
    return getUserById(params)
}

export async function PUT(req:NextRequest, params:paramsInterface){
    return await updateUser(req, params)
}

export async function POST(){
    
  
}