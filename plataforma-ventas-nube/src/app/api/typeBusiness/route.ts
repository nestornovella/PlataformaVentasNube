import { NextRequest } from "next/server";
import { createTypeBusiness, getTypeBusiness } from "../DB/controllers/TypeBusiness.controller";


export async function GET(){
  return await getTypeBusiness();
}

export async function POST(req: NextRequest){
  return await createTypeBusiness(req);
}