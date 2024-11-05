import { NextRequest } from "next/server";
import { addCategoryChild, createCategory, getCategories } from "./Category.controller";


export async function GET(){
  return await getCategories();
}

export async function POST(req: NextRequest){
  const body = await req.json()
  const {action} = body
  if(action){
    return await addCategoryChild(body)
  }else{
    return await createCategory(body);
  }

}