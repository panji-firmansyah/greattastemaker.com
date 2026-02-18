import Link from "next/link";
import { Logo } from "@/components/icons/Logo";
import { FOOTER_NAV, SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-bg-dark">
      <div className="mx-auto max-w-content-full px-5 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Logo className="text-lg" onDark />
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-sans text-sm font-semibold text-[var(--text-on-dark)]">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {FOOTER_NAV.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-sans text-sm text-[var(--text-on-dark-secondary)] transition-colors hover:text-[var(--text-on-dark)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-sans text-sm font-semibold text-[var(--text-on-dark)]">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {FOOTER_NAV.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-sans text-sm text-[var(--text-on-dark-secondary)] transition-colors hover:text-[var(--text-on-dark)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans text-sm font-semibold text-[var(--text-on-dark)]">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="font-sans text-sm text-[var(--text-on-dark-secondary)] transition-colors hover:text-[var(--text-on-dark)]"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hi%20GreatTastemaker!%20I%27d%20like%20to%20learn%20more.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-[var(--text-on-dark-secondary)] transition-colors hover:text-[var(--text-on-dark)]"
                >
                  WhatsApp →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-[var(--border-dark)] pt-8">
          <p className="text-center font-sans text-sm text-[var(--text-on-dark-secondary)]">
            &copy; {new Date().getFullYear()} GreatTastemaker. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
