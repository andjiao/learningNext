import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import prisma from '@/prisma/client';

import schema from '../schema';


export async function GET(
    request:NextRequest, 
    {params}: { params: {id: string}}){
      const user = await prisma.user.findUnique({
        where:{
          id: parseInt(params.id)
        }
      })
        if(!user)
          return NextResponse.json({error: "User not found"}, {status:404})

        return NextResponse.json(user)
    }

    export async function PUT(
        req:NextRequest, 
        {params}: { params: {id: number}})
        {
            const body = await req.json()
            const validation = schema.safeParse(body)
            if(!validation.success)
              return NextResponse.json(validation.error.errors,{status:400})

            if(params.id > 10)
              return NextResponse.json({error: "user not found"}, {status:404})

            return NextResponse.json({id:1, name:body.name})

        }
    
    export function DELETE (
        req:NextRequest, 
        {params}: { params: {id: number}} 
        ){
            if(params.id > 10)
              return NextResponse.json({error:"user not found"}, {status:404})
            
            return NextResponse.json({})

        }
