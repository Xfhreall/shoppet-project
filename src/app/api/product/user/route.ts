import prisma from '@/shared/lib/prisma';
import { auth, clerkClient } from '@clerk/nextjs/server';
import { type NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
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

  try {
    const products = await prisma.product.findMany({
      where: {
        userId: user?.id,
      },
    });

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 },
    );
  }
}
