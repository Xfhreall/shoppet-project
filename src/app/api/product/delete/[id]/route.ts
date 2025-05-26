import prisma from '@/shared/lib/prisma';
import { type NextRequest, NextResponse } from 'next/server';

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  try {
    const deletedProduct = await prisma.product.delete({
      where: { id: id },
    });

    return NextResponse.json(
      { message: 'Product deleted successfully', product: deletedProduct },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { error: 'Product not found or could not be deleted' },
      { status: 404 },
    );
  }
}
