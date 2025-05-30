'use client';
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavBody,
  NavItems,
  Navbar,
  NavbarLogo,
  ThemeButton,
} from '@/shared/components/ui/resizable-navbar';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { LayoutDashboard } from 'lucide-react';
import { useState } from 'react';
import { ThemeSwitcher } from './ui/theme-switcher';

export function NavMenu() {
  const navItems = [
    {
      name: 'Products',
      link: '/products',
    },
    {
      name: 'Features',
      link: '/features',
    },
    {
      name: 'Contact',
      link: '/contact',
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <ThemeButton />
            <div className="z-20 group border-l-2 border-foreground/60 pl-4">
              <SignedOut>
                <SignInButton />
              </SignedOut>
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
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full justify-between items-center">
              <ThemeSwitcher />
              <div>
                <SignedOut>
                  <SignInButton />
                </SignedOut>
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
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Navbar */}
    </div>
  );
}
