import { Building2, Briefcase, Globe, Users } from "lucide-react";

const ITEMS = [
  { icon: Building2, label: "PWD Departments" },
  { icon: Briefcase, label: "CPWD Offices" },
  { icon: Globe, label: "Municipal Corporations" },
  { icon: Users, label: "Local Body Engineers" }
];

export default function TrustBar() {
  return (
    <section className="bg-navy-900 py-10 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-white/60">
          Trusted by engineering professionals across
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {ITEMS.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <Icon size={24} className="text-amber-brand" strokeWidth={1.5} />
              <span className="text-sm font-semibold sm:text-base">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
