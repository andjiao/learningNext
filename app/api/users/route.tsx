import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export async function GET(req: NextRequest){
    const users = await prisma.user.findMany()

    return NextResponse.json(users)
}

export async function POST(req: NextRequest){
const body = await req.json()
const validation = schema.safeParse(body)
if(!validation.success)
return NextResponse.json(validation.error.errors, {status:400})
return NextResponse.json({id:1, name: body.name}, {status:201}) // 201 mean object created
}