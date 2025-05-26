import prisma from '@/shared/lib/prisma';
import { type NextRequest, NextResponse } from 'next/server';

type Context = {
  params: {
    id: string;
  };
};

export async function DELETE(req: NextRequest, { params }: Context) {
  const { id } = await params;

  try {
    const deletedProduct = await prisma.product.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: 'Product deleted successfully', product: deletedProduct },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Product not found or could not be deleted' },
      { status: 404 },
    );
  }
}
