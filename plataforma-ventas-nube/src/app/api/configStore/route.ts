import { NextRequest } from "next/server";
import { createConfigurationStore, getConfigurationStore } from "./ConfigurationStore.controller";



export async function GET(){
    return await getConfigurationStore()
}


export async function POST(req: NextRequest){
    const body = await req
    return await createConfigurationStore(body)
}