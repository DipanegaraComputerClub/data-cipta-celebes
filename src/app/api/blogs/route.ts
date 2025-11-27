import { PrismaClient } from "@prisma/client";

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
