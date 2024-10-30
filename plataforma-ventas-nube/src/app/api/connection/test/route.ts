import { NextResponse } from "next/server";
import sequelize from "../../DB/db";
const {models} = sequelize


export async function GET (){
    const usuarios = await models.User.findAll()
    return NextResponse.json(usuarios)

}

export async function POST (){
    const usuarios = await models.User.findAll()
    return NextResponse.json(usuarios)

}