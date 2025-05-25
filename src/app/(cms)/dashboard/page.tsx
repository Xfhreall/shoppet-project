import { auth } from '@clerk/nextjs/server';

export default async function Page() {
  const { redirectToSignIn, userId } = await auth();

  if (!userId) redirectToSignIn();

  return <h1>Hello, user id anda: {userId}</h1>;
}
