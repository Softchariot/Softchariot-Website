import { CLIENTS } from "../../lib/brand";

export default function Clients() {
  return (
    <section id="clients" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-amber-brand">
            Audience
          </span>
          <h2 className="font-display mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
            Designed for Government Engineering Officials
          </h2>
          <p className="mt-4 text-lg text-slate-muted">
            Whether you are in a state PWD, central CPWD office, or a municipal corporation
            — this software fits your workflow.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CLIENTS.map((client) => (
            <article
              key={client.abbr}
              className="rounded-2xl border border-slate-200 bg-white p-7 text-center transition hover:border-navy-600 hover:shadow-lg"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-navy-800 text-sm font-extrabold text-white">
                {client.abbr}
              </div>
              <h3 className="font-bold text-navy-900">{client.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-muted">
                {client.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
