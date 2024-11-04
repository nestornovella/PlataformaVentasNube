import { NextRequest } from "next/server";
import { createStore, getStore } from "../DB/controllers/Store.controller";


export async function GET(){
  return await getStore();
}

export async function POST(req: NextRequest){
  return await createStore(req);
}