import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const contacts = await prisma.contactInfo.findMany({
      orderBy: { createdAt: "desc" },
    });

    return Response.json(contacts);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return Response.json({ error: "Failed to fetch contacts" }, { status: 500 });
  }
}
