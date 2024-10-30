import { NextRequest, NextResponse } from "next/server";
import sequelize, { checkConection } from "../db"
import { response, statusCode } from "../helpers/ResponseHelper.helper";
const {models} = sequelize



export async function getProducts(req: NextRequest){
    console.log(req.url)
    
    try {
        await checkConection()
        const productList = await models.Product.findAll()
        return response(statusCode.aceptado, productList)

    } catch (error: any) {
        return response(statusCode.noEncontrado ,error.message)
    }

}