import { Download, CheckCircle2 } from "lucide-react";
import { BRAND, ESTIMATE_ROWS } from "../../lib/brand";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 pt-28 pb-20"
    >
      <div className="absolute inset-0 grid-pattern [mask-image:linear-gradient(to_bottom,black_60%,transparent)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="inline-flex rounded-full border border-navy-800/15 bg-navy-800/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-navy-800">
            Built by a Civil Engineer &amp; Software Engineer
          </span>

          <h1 className="font-display mt-5 text-4xl font-bold leading-tight text-navy-950 sm:text-5xl">
            {BRAND.tagline}
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-muted">
            {BRAND.product} by {BRAND.company} — prepare structure project drawings,
            detailed estimates, and BOQ reports with accuracy and speed for government
            engineering workflows across India.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#download"
              className="inline-flex items-center gap-2 rounded-lg bg-amber-brand px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-amber-brand/25 transition hover:bg-amber-brand-hover"
            >
              <Download size={18} />
              Download Software
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-lg border-2 border-navy-800 px-6 py-3.5 text-sm font-semibold text-navy-800 transition hover:bg-navy-800 hover:text-white"
            >
              Request Demo
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-8 border-t border-slate-200 pt-8">
            {[
              { value: "15+", label: "Years Engineering Experience" },
              { value: "500+", label: "Projects Prepared" },
              { value: "100%", label: "Offline Desktop Software" }
            ].map((stat) => (
              <div key={stat.label}>
                <strong className="block text-2xl font-bold text-navy-800">{stat.value}</strong>
                <span className="text-xs font-medium text-slate-muted">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
            <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              <span className="ml-2 text-xs font-semibold text-slate-500">
                Structure Project — Estimate Sheet
              </span>
            </div>
            <div className="overflow-x-auto p-4 text-[11px]">
              <div className="grid min-w-[340px] grid-cols-[24px_1fr_56px_64px_72px] gap-2 border-b border-slate-200 pb-2 text-[10px] font-bold uppercase tracking-wide text-navy-800">
                <span>Sr.</span>
                <span>Description</span>
                <span>Qty</span>
                <span>Rate</span>
                <span className="text-right">Amount</span>
              </div>
              {ESTIMATE_ROWS.map((row) => (
                <div
                  key={row.sr}
                  className="grid min-w-[340px] grid-cols-[24px_1fr_56px_64px_72px] gap-2 border-b border-slate-100 py-2 text-slate-600"
                >
                  <span>{row.sr}</span>
                  <span>{row.item}</span>
                  <span>{row.qty}</span>
                  <span>{row.rate}</span>
                  <span className="text-right">{row.amount}</span>
                </div>
              ))}
              <div className="grid min-w-[340px] grid-cols-[24px_1fr_56px_64px_72px] gap-2 pt-3 text-xs font-bold text-navy-900">
                <span />
                <span>Grand Total</span>
                <span />
                <span />
                <span className="text-right">₹ 6,56,450</span>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-xl bg-emerald-700 px-4 py-3 text-xs font-semibold text-white shadow-xl sm:text-sm">
            <CheckCircle2 size={18} />
            DSR / Schedule of Rates Compatible
          </div>
        </div>
      </div>
    </section>
  );
}
