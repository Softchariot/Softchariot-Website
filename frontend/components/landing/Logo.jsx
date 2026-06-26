import Link from "next/link";
import { BRAND } from "../../lib/brand";

export default function Logo({ light = false }) {
  return (
    <Link href="/#home" className="flex items-center gap-2.5">
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-lg ${
          light ? "bg-white/10" : "bg-navy-800"
        }`}
      >
        <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none">
          <path
            d="M4 20L16 8L28 20"
            stroke="#c8791a"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <rect x="12" y="20" width="8" height="8" fill="#c8791a" />
        </svg>
      </span>
      <span className={`leading-tight ${light ? "text-white" : "text-navy-900"}`}>
        <span className="block text-sm font-bold">{BRAND.company}</span>
        <span className="block text-xs font-medium text-amber-brand">{BRAND.product}</span>
      </span>
    </Link>
  );
}
