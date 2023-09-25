import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest){
    return NextResponse.json([
        {id:1, name: "Andreea"},
        {id:2, name: "Jonathan"},
    ])
}

export async function POST(req: NextRequest){
const body = await req.json()
if(!body.name)
return NextResponse.json({error: "Name is required"}, {status:400})
return NextResponse.json({id:1, name: body.name}, {status:201}) // 201 mean object created
}