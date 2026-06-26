import { BRAND } from "../../lib/brand";

export default function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[360px_1fr]">
        <div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
            <img
              src={BRAND.founderPhoto}
              alt="Founder — Civil Engineer & Software Engineer"
              className="aspect-square w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-navy-900 px-4 py-4 text-center text-white">
              <strong className="block text-sm">B.E. / B.Tech</strong>
              <span className="text-xs text-white/70">Civil Engineering</span>
            </div>
            <div className="rounded-xl bg-navy-900 px-4 py-4 text-center text-white">
              <strong className="block text-sm">Software Engineer</strong>
              <span className="text-xs text-white/70">Application Developer</span>
            </div>
          </div>
        </div>

        <div>
          <span className="text-sm font-bold uppercase tracking-widest text-amber-brand">
            About
          </span>
          <h2 className="font-display mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
            Engineering Expertise Meets Software Innovation
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-muted">
            I am a Civil Engineer and Software Engineer with over 15 years of experience in
            structural project preparation and government estimate workflows. Having worked
            closely with PWD and local body departments, I understood the daily challenges
            engineers face — manual calculations, inconsistent formats, and time-consuming
            BOQ preparation.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-muted">
            <strong className="text-navy-900">{BRAND.product}</strong> by{" "}
            <strong className="text-navy-900">{BRAND.company}</strong> was born from that
            experience: a desktop application built by someone who has prepared hundreds of
            structure projects and estimates firsthand. Every feature reflects real-world
            requirements of government engineering offices.
          </p>
          <blockquote className="font-display mt-6 border-l-4 border-amber-brand bg-slate-50 py-4 pl-5 pr-4 text-lg italic text-navy-800">
            &ldquo;Software should serve the engineer&apos;s workflow — not the other way
            around.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
