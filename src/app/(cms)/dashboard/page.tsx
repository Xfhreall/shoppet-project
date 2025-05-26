'use client';
import {
  Sidebar,
  SidebarBody,
  SidebarLink,
} from '@/shared/components/ui/sidebar';
import { ThemeSwitcher } from '@/shared/components/ui/theme-switcher';
import { cn } from '@/shared/lib/utils';
import {
  IconBrandAppgallery,
  IconBrandTabler,
  IconCirclePlus,
} from '@tabler/icons-react';
import { motion } from 'motion/react';
import React, { useState } from 'react';

export default function SidebarDashboard() {
  const links = [
    {
      label: 'Dashboard',
      href: '/dashboard',
      icon: (
        <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: 'Products',
      href: 'dashboard/products',
      icon: (
        <IconBrandAppgallery className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: 'Post',
      href: 'dashboard/add',
      icon: (
        <IconCirclePlus className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        'mx-auto flex relative w-full flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-200 md:flex-row dark:border-neutral-700 dark:bg-neutral-900',
        'h-screen',
      )}
    >
      <div className="absolute top-5 right-5">
        <ThemeSwitcher />
      </div>
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
            <SidebarLink
              link={{
                label: 'Manu Arora',
                href: '#',
                icon: (
                  <img
                    src="https://assets.aceternity.com/manu.png"
                    className="h-7 w-7 shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
    </div>
  );
}
export const Logo = () => {
  return (
    <div className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black">
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-black dark:text-white"
      >
        Acet Labs
      </motion.span>
    </div>
  );
};
export const LogoIcon = () => {
  return (
    <div className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black">
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
    </div>
  );
};
