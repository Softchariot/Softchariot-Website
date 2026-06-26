import {
  BarChart3,
  FileText,
  HardDrive,
  RefreshCw,
  Table,
  Users
} from "lucide-react";
import { FEATURES } from "../../lib/brand";

const ICONS = {
  FileText,
  Table,
  BarChart3,
  HardDrive,
  Users,
  RefreshCw
};

export default function Features() {
  return (
    <section id="features" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-amber-brand">
            Features
          </span>
          <h2 className="font-display mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
            Everything You Need for Structure Projects & Estimates
          </h2>
          <p className="mt-4 text-lg text-slate-muted">
            Purpose-built tools that mirror the workflow of government engineering
            departments — from project preparation to final estimate submission.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = ICONS[feature.icon];
            return (
              <article
                key={feature.title}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:border-navy-600 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 text-white">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-bold text-navy-900">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-muted">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
