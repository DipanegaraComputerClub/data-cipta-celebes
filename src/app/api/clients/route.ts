import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

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

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { name, logo, industry } = body;

    if (!name || !logo) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const client = await prisma.client.create({
      data: {
        name,
        logo,
        industry: industry || "",
      },
    });

    return NextResponse.json(client, { status: 201 });
  } catch (error: any) {
    console.error("POST error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create client" },
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
    const { id, name, logo, industry } = body;

    if (!id) {
      return NextResponse.json(
        { error: "Client ID is required" },
        { status: 400 }
      );
    }

    const client = await prisma.client.update({
      where: { id: parseInt(id) },
      data: {
        name,
        logo,
        industry,
      },
    });

    return NextResponse.json(client);
  } catch (error: any) {
    console.error("PUT error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to update client" },
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
        { error: "Client ID is required" },
        { status: 400 }
      );
    }

    await prisma.client.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("DELETE error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to delete client" },
      { status: 500 }
    );
  }
}
