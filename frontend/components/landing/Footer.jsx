import Link from "next/link";
import { BRAND } from "../../lib/brand";
import Logo from "./Logo";

const FOOTER_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "Features", href: "/#features" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
  { label: "Download", href: "/#download" },
  { label: "Login", href: "/login" }
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Professional civil engineering software for structure projects and detailed
            estimates — by {BRAND.company}.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {FOOTER_LINKS.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">Legal</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="#" className="transition hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-white">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-white">
                License Agreement
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} {BRAND.company}. All rights reserved.
      </div>
    </footer>
  );
}
