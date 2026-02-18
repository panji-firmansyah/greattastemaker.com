"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export function MobileBottomBar() {
  const pathname = usePathname();

  // Don't show on the /start page since they're already there
  if (pathname === "/start") return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border-light bg-bg-primary/95 backdrop-blur-sm px-5 py-3 lg:hidden">
      <Button asChild size="full">
        <Link href="/start">Get Started →</Link>
      </Button>
    </div>
  );
}
