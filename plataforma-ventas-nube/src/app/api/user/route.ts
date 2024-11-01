import { NextRequest, NextResponse } from "next/server";
import { createUser, getAllUsers } from "../DB/controllers/User.controller";



export async function GET(){
    return await getAllUsers()
}


export async function POST(req: NextRequest){
    return await createUser(req)
}