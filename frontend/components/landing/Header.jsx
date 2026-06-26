import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { BRAND, NAV_LINKS } from "../../lib/brand";
import Logo from "./Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-shadow ${
        scrolled ? "bg-white/95 shadow-md backdrop-blur-md" : "bg-white/90 backdrop-blur-sm"
      } border-b border-slate-200`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-6">
        <Logo />

        <button
          type="button"
          className="rounded-lg p-2 text-navy-800 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav
          className={`${
            open
              ? "fixed inset-x-0 top-[4.5rem] bottom-0 bg-white px-6 py-6 lg:static lg:bg-transparent lg:p-0"
              : "hidden lg:block"
          }`}
        >
          <ul className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-navy-800 lg:py-2"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                href={BRAND.loginUrl}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm font-semibold text-navy-800 hover:bg-slate-100 lg:py-2"
              >
                Login
              </Link>
            </li>
            <li className="lg:ml-2">
              <a
                href="#download"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-lg bg-amber-brand px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-amber-brand-hover lg:mt-0 lg:py-2.5"
              >
                Download Software
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
