"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/constants";
import { Logo } from "@/components/icons/Logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-content items-center justify-between px-6 md:px-8">
        {/* Logo */}
        <Link href="/" className="relative z-10">
          <Logo className="text-2xl" />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={cn(
                "text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded-sm",
                pathname === item.href
                  ? "text-cyan-400"
                  : "text-zinc-400 hover:text-zinc-50"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button asChild size="sm">
            <Link href="/kontak">
              Mulai Sprint
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full border-zinc-800 bg-zinc-950 sm:max-w-sm"
          >
            <SheetTitle className="sr-only">Menu Navigasi</SheetTitle>
            <div className="flex flex-col gap-6 pt-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={cn(
                    "text-lg font-medium transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50",
                    pathname === item.href
                      ? "text-cyan-400"
                      : "text-zinc-400 hover:text-zinc-50"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/kontak"
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-zinc-400 transition-colors hover:text-zinc-50"
              >
                Kontak
              </Link>
              <div className="pt-4">
                <Button asChild className="w-full" onClick={() => setOpen(false)}>
                  <Link href="/kontak">
                    Mulai Sprint
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
