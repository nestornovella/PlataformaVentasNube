import { NextRequest } from "next/server";
import { createProduct, getProducts } from "./Prodct.controller";

export async function GET(){
    return await getProducts();
}

export async function POST(req: NextRequest){
    return await createProduct(req);
}
