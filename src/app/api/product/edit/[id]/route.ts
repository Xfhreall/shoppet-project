import prisma from '@/shared/lib/prisma';
import { type NextRequest, NextResponse } from 'next/server';

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const body = await req.json();
    const { title, description, price, image_url, category } = body;

    const updatedProduct = await prisma.product.update({
      where: { id: (await params).id },
      data: {
        title,
        description,
        price,
        image_url,
        category,
        updatedAt: new Date(),
      },
    });

    return NextResponse.json(updatedProduct, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to update product' },
      { status: 500 },
    );
  }
}
