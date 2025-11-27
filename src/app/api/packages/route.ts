import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const packages = await prisma.customPackage.findMany({
      orderBy: { createdAt: "desc" },
    });

    return Response.json(packages);
  } catch (error) {
    console.error("Error fetching packages:", error);
    return Response.json({ error: "Failed to fetch packages" }, { status: 500 });
  }
}
