import { NextRequest, NextResponse } from "next/server";
import { checkConection, connectDB } from "../../DB/db";
import { getUserById, updateUser } from "../../DB/controllers/User.controller";
import { paramsInterface } from "../../DB/controllers/interface/interface";



export async function GET(req:NextRequest, params:paramsInterface){
    return getUserById(params)
}

export async function PUT(req:NextRequest, params:paramsInterface){
    return await updateUser(req, params)
}

export async function POST(){
    
  
}