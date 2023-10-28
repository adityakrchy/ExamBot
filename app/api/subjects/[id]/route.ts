import prisma from "@/prisma";
import { NextResponse } from "next/server";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  // return NextResponse.json({ id: params.id });
  try {
    const { id } = params;
    const { name } = await req.json();
    const subject = await prisma.subjects.update({
      where: { id },
      data: { name },
    });
    return NextResponse.json(subject);
  } catch {
    return NextResponse.error();
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const subject = await prisma.subjects.delete({ where: { id } });
    return NextResponse.json(subject);
  } catch {
    return NextResponse.error();
  }
}
