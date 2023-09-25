import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';


export function GET(
    request:NextRequest, 
    {params}: { params: {id: number}}){
        if(params.id>10)
        return NextResponse.json({error: "User not found"}, {status:404})

        return NextResponse.json({id:1, name: "andrea"})
    }

    export async function PUT(
        req:NextRequest, 
        {params}: { params: {id: number}})
        {
            const body = await req.json()
            if(!body.name)
            return NextResponse.json({error:"name is required"},{status:400})

            if(params.id > 10)
            return NextResponse.json({error: "user not found"}, {status:404})

            return NextResponse.json({id:1, name:body.name})

        }
