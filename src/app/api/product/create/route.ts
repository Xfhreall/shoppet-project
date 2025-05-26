import prisma from '@/shared/lib/prisma';
import { auth, clerkClient } from '@clerk/nextjs/server';
import { hash } from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
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

  let user = await prisma.user.findUnique({
    where: { email },
  });

  const dummyPass = 'dummy-password';
  const hashedPass = await hash(dummyPass, 10);
  if (!user) {
    user = await prisma.user.create({
      data: {
        email,
        password: hashedPass,
      },
    });
  }

  const body = await req.json();
  const { title, description, price, image_url, category } = body;

  if (!title || !price || !image_url || !category) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  const product = await prisma.product.create({
    data: {
      title,
      description,
      price,
      image_url,
      category,
      userId: user.id,
    },
  });

  return NextResponse.json({ product }, { status: 201 });
}
