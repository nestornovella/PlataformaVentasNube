import { NextResponse } from "next/server";
import sequelize, { checkConection } from "../../DB/db";
const {models} = sequelize


export async function GET (){
   
    const usuarios = await models.User.findAll()
    return NextResponse.json(usuarios)

}