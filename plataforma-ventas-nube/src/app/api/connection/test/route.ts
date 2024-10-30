import { NextRequest, NextResponse } from "next/server";
import sequelize, { checkConection } from "../../DB/db";
import { getProducts } from "../../DB/controllers/Prodct.controller";
const { models } = sequelize


export async function GET(req:NextRequest) {
    return await getProducts(req) // NextResponse
}

export async function POST(request:NextRequest) {
    await checkConection()
    
    try {
        const body = await request.json()
        const usuario = await models.Product.create(body)
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