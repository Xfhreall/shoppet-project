'use client';
import { useUser } from '@clerk/nextjs';
export default function Page() {
  const { user } = useUser();
  return <h1>Hello, {user?.username || user?.firstName}</h1>;
}
