import { NextResponse } from "next/server";
import { connectDB } from "../DB/db";




export async function GET() {
    try {
        const response = await connectDB()
        return NextResponse.json(response)
    } catch (error) {
        console.error(error)
    }

}