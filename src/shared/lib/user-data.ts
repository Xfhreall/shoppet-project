import { useUser } from '@clerk/nextjs';

export function getUserEmail(): string | null {
  const { user } = useUser();

  if (!user) return null;
  return user.fullName || user.emailAddresses[0]?.emailAddress || '...';
}
