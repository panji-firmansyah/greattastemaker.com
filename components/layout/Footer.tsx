import Link from "next/link";
import { Logo } from "@/components/icons/Logo";
import { FOOTER_NAV, SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/50">
      <div className="mx-auto max-w-content px-6 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Logo className="text-2xl" />
            <p className="mt-3 text-sm text-zinc-500">
              GTM Engine untuk B2B Indonesia
            </p>
          </div>

          {/* Navigasi */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-300">Navigasi</h3>
            <ul className="mt-4 space-y-3">
              {FOOTER_NAV.navigasi.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-500 transition-colors hover:text-zinc-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 rounded-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-300">Layanan</h3>
            <ul className="mt-4 space-y-3">
              {FOOTER_NAV.layanan.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-500 transition-colors hover:text-zinc-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 rounded-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-300">Kontak</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-sm text-zinc-500 transition-colors hover:text-zinc-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 rounded-sm"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-500 transition-colors hover:text-zinc-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 rounded-sm"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="divider-gradient mt-12" />
        <p className="mt-8 text-center text-sm text-zinc-600">
          &copy; {new Date().getFullYear()} Great Tastemaker. Hak cipta dilindungi.
        </p>
      </div>
    </footer>
  );
}
