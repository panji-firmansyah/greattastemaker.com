"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/constants";
import { Logo } from "@/components/icons/Logo";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-[var(--bg-primary)]/90 backdrop-blur-[12px] border-b border-border-light"
          : "bg-transparent"
      )}
    >
      <nav aria-label="Main navigation" className="mx-auto flex h-16 max-w-content-full items-center justify-between px-5 md:px-10">
        {/* Logo */}
        <Link href="/" className="relative z-10">
          <Logo className="text-lg" />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "font-sans text-sm transition-colors",
                pathname === item.href
                  ? "text-text-primary underline underline-offset-[6px] decoration-2"
                  : "text-text-secondary hover:text-text-primary"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button asChild size="sm">
            <Link href="/start">Get Started →</Link>
          </Button>
        </div>

        {/* Mobile: CTA + Hamburger */}
        <div className="flex items-center gap-3 lg:hidden">
          <Button asChild size="sm" className="text-xs px-3 py-1.5">
            <Link href="/start">Get Started →</Link>
          </Button>
          <MobileMenu currentPath={pathname} />
        </div>
      </nav>
    </header>
  );
}
