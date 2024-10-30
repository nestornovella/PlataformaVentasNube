import { NextRequest, NextResponse } from "next/server";
import sequelize, { checkConection } from "../../DB/db";
const { models } = sequelize


export async function GET() {
    try {
        await checkConection()
        const usuarios = await models.User.findAll()
        return NextResponse.json({
            data:usuarios})
    } catch (error: any) {
        return NextResponse.json({
            error: {
                message: error.message
            }
        })
    }

}

export async function POST(request:NextRequest) {
    await checkConection()
    
    try {
        const body = await request.json()
        const usuario = await models.User.create(body)
        if(!usuario) throw new Error('el usuario no fue creado')
        return NextResponse.json("usuario creado")
    } catch (error: any) {
        return NextResponse.json({
            error: {
                message: error.message
            }
        })
    }

}