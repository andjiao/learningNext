import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest){
    return NextResponse.json([
        {id:1, name: "Andreea"},
        {id:2, name: "Jonathan"},
    ])

}