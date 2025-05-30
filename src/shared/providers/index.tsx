'use client';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from '@/shared/providers/theme-provider';
import { Toaster } from '@/shared/components/ui/sonner';
import type { ReactNode } from 'react';

export function AppProviders({ children }: { children: ReactNode }) {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <ClerkProvider>
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
                    {children}
                    <Toaster />
                </ThemeProvider>
            </ClerkProvider>
        </QueryClientProvider>
    );
}
