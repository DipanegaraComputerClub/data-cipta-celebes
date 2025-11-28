import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const limit = url.searchParams.get("limit") ? parseInt(url.searchParams.get("limit")!) : undefined;

    const testimonials = await prisma.testimonial.findMany({
      orderBy: { createdAt: "desc" },
      take: limit,
    });

    return Response.json(testimonials);
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return Response.json({ error: "Failed to fetch testimonials" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { name, company, position, content, image, rating } = body;

    if (!name || !content || !image) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const testimonial = await prisma.testimonial.create({
      data: {
        name,
        company: company || "",
        position: position || "",
        content,
        image,
        rating: rating || 5,
      },
    });

    return NextResponse.json(testimonial, { status: 201 });
  } catch (error: any) {
    console.error("POST error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create testimonial" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { id, name, company, position, content, image, rating } = body;

    if (!id) {
      return NextResponse.json(
        { error: "Testimonial ID is required" },
        { status: 400 }
      );
    }

    const testimonial = await prisma.testimonial.update({
      where: { id: parseInt(id) },
      data: {
        name,
        company,
        position,
        content,
        image,
        rating,
      },
    });

    return NextResponse.json(testimonial);
  } catch (error: any) {
    console.error("PUT error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to update testimonial" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Testimonial ID is required" },
        { status: 400 }
      );
    }

    await prisma.testimonial.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("DELETE error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to delete testimonial" },
      { status: 500 }
    );
  }
}
