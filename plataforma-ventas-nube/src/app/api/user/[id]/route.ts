import { NextRequest, NextResponse } from "next/server";
import { checkConection, connectDB } from "../../DB/db";
import { getUserById, paramsInterface, updateUser } from "../../DB/controllers/User.controller";



export async function GET(req:NextRequest, params:paramsInterface){
    return getUserById(params)
}

export async function PUT(req:NextRequest, params:paramsInterface){
    return await updateUser(req, params)
}

export async function POST(){
    
  
}