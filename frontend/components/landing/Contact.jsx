import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { BRAND } from "../../lib/brand";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    department: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${BRAND.product} — Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nDepartment: ${form.department}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${BRAND.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <span className="text-sm font-bold uppercase tracking-widest text-amber-brand">
            Contact
          </span>
          <h2 className="font-display mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-muted">
            Request a demo, ask about licensing for your department, or get technical support
            from {BRAND.company}.
          </p>

          <ul className="mt-8 space-y-5">
            <li className="flex gap-4 border-b border-slate-200 pb-5">
              <Mail size={22} className="mt-0.5 shrink-0 text-navy-800" strokeWidth={1.5} />
              <div>
                <strong className="block text-xs font-bold uppercase tracking-wide text-slate-400">
                  Email
                </strong>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="text-base text-navy-900 hover:text-navy-700"
                >
                  {BRAND.email}
                </a>
              </div>
            </li>
            <li className="flex gap-4 border-b border-slate-200 pb-5">
              <Phone size={22} className="mt-0.5 shrink-0 text-navy-800" strokeWidth={1.5} />
              <div>
                <strong className="block text-xs font-bold uppercase tracking-wide text-slate-400">
                  Phone
                </strong>
                <a
                  href={`tel:${BRAND.phone}`}
                  className="text-base text-navy-900 hover:text-navy-700"
                >
                  {BRAND.phoneDisplay}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <MapPin size={22} className="mt-0.5 shrink-0 text-navy-800" strokeWidth={1.5} />
              <div>
                <strong className="block text-xs font-bold uppercase tracking-wide text-slate-400">
                  Location
                </strong>
                <span className="text-base text-navy-900">{BRAND.location}</span>
              </div>
            </li>
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-200 bg-slate-50 p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-navy-900">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Er. Rajesh Kumar"
                className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm outline-none transition focus:border-navy-800 focus:ring-2 focus:ring-navy-800/15"
              />
            </div>
            <div>
              <label
                htmlFor="department"
                className="mb-1.5 block text-sm font-semibold text-navy-900"
              >
                Department / Organization
              </label>
              <input
                id="department"
                name="department"
                value={form.department}
                onChange={handleChange}
                placeholder="State PWD, Division — City"
                className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm outline-none transition focus:border-navy-800 focus:ring-2 focus:ring-navy-800/15"
              />
            </div>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-navy-900">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@pwd.gov.in"
                className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm outline-none transition focus:border-navy-800 focus:ring-2 focus:ring-navy-800/15"
              />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-navy-900">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 98232 07993"
                className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm outline-none transition focus:border-navy-800 focus:ring-2 focus:ring-navy-800/15"
              />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-navy-900">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="I would like to request a demo for our division..."
              className="w-full resize-y rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm outline-none transition focus:border-navy-800 focus:ring-2 focus:ring-navy-800/15"
            />
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-amber-brand px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-amber-brand-hover"
          >
            <Send size={16} />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
