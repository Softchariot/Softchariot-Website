import { STEPS } from "../../lib/brand";

export default function HowItWorks() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-amber-brand">
            Workflow
          </span>
          <h2 className="font-display mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
            From Project to Estimate in Four Steps
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((item, index) => (
            <div key={item.step} className="relative text-center">
              {index < STEPS.length - 1 && (
                <div
                  className="absolute top-7 hidden h-0.5 w-full bg-slate-300 lg:block lg:w-[calc(100%+2rem)]"
                  aria-hidden="true"
                />
              )}
              <div className="relative mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-navy-800 text-sm font-bold text-white shadow-lg">
                {item.step}
              </div>
              <h3 className="font-semibold text-navy-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
