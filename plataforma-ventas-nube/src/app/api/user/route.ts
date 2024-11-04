import { NextRequest } from "next/server";
import { createUser, getAllUsers } from "./User.controller";



export async function GET(){
    return await getAllUsers()
}


export async function POST(req: NextRequest){
    return await createUser(req)
}