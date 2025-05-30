import prisma from '@/shared/lib/prisma';
import { auth, clerkClient } from '@clerk/nextjs/server';
import { type NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const clerk = await clerkClient();
    const clerkUser = await clerk.users.getUser(userId);
    const email = clerkUser.emailAddresses[0]?.emailAddress;

    if (!email) {
      return NextResponse.json(
        { error: 'Email not found from Clerk' },
        { status: 400 },
      );
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json([]);
    }

    if (user.role === 'ADMIN') {
      const products = await prisma.product.findMany({
        orderBy: { createdAt: 'asc' },
      });
      return NextResponse.json(products);
    }

    // Return user's products
    const products = await prisma.product.findMany({
      where: {
        userId: user.id,
      },
    });
    return NextResponse.json(products);
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 },
    );
  }
}
