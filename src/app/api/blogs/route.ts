import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const limit = url.searchParams.get("limit") ? parseInt(url.searchParams.get("limit")!) : undefined;

    const blogs = await prisma.blog.findMany({
      orderBy: { createdAt: "desc" },
      take: limit,
    });

    return Response.json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return Response.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}

// POST - Create new blog
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { title, slug, description, content, image, author, category, tags } = body;

    if (!title || !slug || !description || !content || !image) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const blog = await prisma.blog.create({
      data: {
        title,
        slug,
        description,
        content,
        image,
        author: author || "Admin",
        category: category || "General",
        tags: JSON.stringify(tags || []),
      },
    });

    return NextResponse.json(blog, { status: 201 });
  } catch (error: any) {
    console.error("POST error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create blog" },
      { status: 500 }
    );
  }
}

// PUT - Update blog
export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { id, title, slug, description, content, image, author, category, tags } = body;

    if (!id) {
      return NextResponse.json(
        { error: "Blog ID is required" },
        { status: 400 }
      );
    }

    const blog = await prisma.blog.update({
      where: { id: parseInt(id) },
      data: {
        title,
        slug,
        description,
        content,
        image,
        author,
        category,
        tags: tags ? JSON.stringify(tags) : undefined,
      },
    });

    return NextResponse.json(blog);
  } catch (error: any) {
    console.error("PUT error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to update blog" },
      { status: 500 }
    );
  }
}

// DELETE - Delete blog
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
        { error: "Blog ID is required" },
        { status: 400 }
      );
    }

    await prisma.blog.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("DELETE error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to delete blog" },
      { status: 500 }
    );
  }
}
