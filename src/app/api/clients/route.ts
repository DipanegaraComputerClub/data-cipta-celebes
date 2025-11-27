import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const clients = await prisma.client.findMany({
      orderBy: { createdAt: "desc" },
    });

    return Response.json(clients);
  } catch (error) {
    console.error("Error fetching clients:", error);
    return Response.json({ error: "Failed to fetch clients" }, { status: 500 });
  }
}
