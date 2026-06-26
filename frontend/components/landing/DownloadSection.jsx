import Link from "next/link";
import { Download, Check } from "lucide-react";
import { BRAND } from "../../lib/brand";

const SPECS = [
  "Windows 10 / 11 (64-bit)",
  "4 GB RAM minimum",
  "500 MB disk space",
  "No internet required after install"
];

export default function DownloadSection() {
  return (
    <section
      id="download"
      className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 py-20 text-white"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1fr_380px]">
        <div>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Download {BRAND.product}
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/80">
            Available for Windows desktop. Install and start preparing your next structure
            project today — from {BRAND.company}.
          </p>

          <ul className="mt-6 space-y-2">
            {SPECS.map((spec) => (
              <li key={spec} className="flex items-center gap-2.5 text-sm text-white/90">
                <Check size={16} className="shrink-0 text-emerald-400" />
                {spec}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <a
              href={BRAND.downloadUrl}
              className="inline-flex items-center gap-2 rounded-lg bg-amber-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-amber-brand-hover"
            >
              <Download size={18} />
              Download for Windows
            </a>
            <p className="mt-3 text-xs text-white/50">
              Version {BRAND.version} · Updated {BRAND.updated}
            </p>
          </div>
        </div>

        <div
          id="login"
          className="rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm"
        >
          <h3 className="text-xl font-bold">Already a licensed user?</h3>
          <p className="mt-2 text-sm text-white/75">
            Sign in to activate your license or manage your account.
          </p>
          <Link
            href={BRAND.loginUrl}
            className="mt-6 block w-full rounded-lg border-2 border-white/60 py-3.5 text-center text-sm font-semibold transition hover:bg-white hover:text-navy-900"
          >
            Login to Portal
          </Link>
          <p className="mt-4 text-center text-xs text-white/50">
            License key required for first-time activation.
          </p>
        </div>
      </div>
    </section>
  );
}
