import { NextRequest } from "next/server";
import { createCategory, getCategories } from "../DB/controllers/Category.controller";


export async function GET(){
  return await getCategories();
}

export async function POST(req: NextRequest){
  return await createCategory(req);
}