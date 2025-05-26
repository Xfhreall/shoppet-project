"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/shared/components/ui/sidebar";
import {
    IconBrandTabler,
    IconCirclePlus,
    IconBrandAppgallery,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { cn } from "@/shared/lib/utils";
import Image from "next/image";
import { SignedIn, UserButton } from '@clerk/nextjs';
import { LayoutDashboard } from 'lucide-react';

export default function SidebarDashboard() {
    const links = [
        {
            label: "Dashboard",
            href: "/dashboard",
            icon: (
                <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
            ),
        },
        {
            label: "Products",
            href: "/dashboard/products",
            icon: (
                <IconBrandAppgallery className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
            ),
        },
        {
            label: "Post",
            href: "/dashboard/add",
            icon: (
                <IconCirclePlus className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
            ),
        }
    ];
    const [open, setOpen] = useState(false);
    return (
        <div
            className={cn(
                "mx-auto flex relative w-full flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-200 md:flex-row dark:border-neutral-700 dark:bg-neutral-900",
                "h-screen",
            )}
        >
            <Sidebar open={open} setOpen={setOpen}>
                <SidebarBody className="justify-between gap-10">
                    <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
                        {open ? <Logo /> : <LogoIcon />}
                        <div className="mt-8 flex flex-col gap-2">
                            {links.map((link, idx) => (
                                <SidebarLink key={idx} link={link} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <SignedIn>
                            <UserButton>
                                <UserButton.MenuItems>
                                    <UserButton.Link
                                        label="Dashboard"
                                        labelIcon={<LayoutDashboard className="size-4" />}
                                        href="/dashboard"
                                    />
                                </UserButton.MenuItems>
                            </UserButton>
                        </SignedIn>
                    </div>
                </SidebarBody>
            </Sidebar>
        </div>
    );
}
export const Logo = () => {
    return (
        <div
            className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
        >
            <Image src="https://cdn.discordapp.com/attachments/1205078015319613452/1376247052140286173/paws2.jpg?ex=68354a32&is=6833f8b2&hm=268e1fd9389ea5cb613d2a3b84196460296099c9abf6c0724620d53cfe656534&" width={24} height={24} alt="logo" className="rounded-full" />
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-medium whitespace-pre text-black dark:text-white"
            >
                Shoppet
            </motion.span>
        </div>
    );
};
export const LogoIcon = () => {
    return (
        <div
            className="relative z-20 flex items-center space-x-2"
        >
            <Image src="https://cdn.discordapp.com/attachments/1205078015319613452/1376247052140286173/paws2.jpg?ex=68354a32&is=6833f8b2&hm=268e1fd9389ea5cb613d2a3b84196460296099c9abf6c0724620d53cfe656534&" width={24} height={24} alt="logo" className="rounded-full" />
        </div>
    );
};