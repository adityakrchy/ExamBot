import prisma from "@/prisma";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        const subjects = await prisma.subjects.findMany();
        return NextResponse.json(subjects, {status: 200});
    }
    catch{
        return NextResponse.error();
    }
}

export async function POST(req: Request){
    try{
        const {subject} = await req.json();
        const subjects = await prisma.subjects.create({
            data: {
                name: subject,
            }
        })
        console.log(subjects);
        return NextResponse.json(subjects, {status: 200});
    }
    catch{
        return NextResponse.error();
    }
}

export async function PUT(req: Request){
    const {id, subject} = await req.json();
}