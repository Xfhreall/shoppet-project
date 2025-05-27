import prisma from '@/shared/lib/prisma';
import { type NextRequest, NextResponse } from 'next/server';

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    const existingProduct = await prisma.product.findUnique({
      where: { id },
    });

    if (!existingProduct) {
      return NextResponse.json(
        { message: 'Product not found' },
        { status: 404 },
      );
    }

    await prisma.product.delete({
      where: { id },
    });

    return NextResponse.json({
      message: 'Product deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting product:', error);

    if (
      error instanceof Error &&
      error.message.includes('Foreign key constraint')
    ) {
      return NextResponse.json(
        {
          message:
            'Cannot delete product. It may be referenced by other records.',
        },
        { status: 409 },
      );
    }

    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 },
    );
  }
}
