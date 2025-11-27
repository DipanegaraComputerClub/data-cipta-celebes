import { PrismaClient } from "@prisma/client";

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
