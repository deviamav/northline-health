import type { Dict } from "@/lib/i18n";
import BookingForm from "./BookingForm";
import Ecg from "./Ecg";
import Reveal from "./Reveal";

function Head({ eyebrow, title, lead, light = false }: { eyebrow: string; title: string; lead: string; light?: boolean }) {
  return (
    <div className="max-w-3xl">
      <Reveal>
        <p className={`mb-4 text-sm font-semibold uppercase tracking-[0.18em] ${light ? "text-sage" : "text-sage-deep"}`}>{eyebrow}</p>
      </Reveal>
      <Reveal delay={0.07}>
        <h2 className="text-[clamp(2.1rem,4.4vw,3.6rem)] font-semibold leading-[1.05]">{title}</h2>
      </Reveal>
      <Reveal delay={0.14}>
        <p className={`mt-5 max-w-2xl text-lg leading-relaxed ${light ? "text-white/70" : "text-navy/65"}`}>{lead}</p>
      </Reveal>
    </div>
  );
}

function ServiceIcon({ i }: { i: number }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" } as const;
  const icons = [
    // stethoscope-ish: primary care
    <g key={0} {...p}><path d="M7 4v6a5 5 0 0 0 10 0V4" /><path d="M12 15v2a4 4 0 0 0 8 0v-2" /><circle cx="20" cy="13" r="2" /></g>,
    // women's health: flower
    <g key={1} {...p}><circle cx="12" cy="12" r="3" /><path d="M12 9V3M12 21v-6M9 12H3M21 12h-6M9.9 9.9 5.6 5.6M18.4 18.4l-4.3-4.3M14.1 9.9l4.3-4.3M5.6 18.4l4.3-4.3" /></g>,
    // heart
    <g key={2} {...p}><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.600-7 10-7 10z" /><path d="M3 12h4l2-3 3 6 2-3h7" /></g>,
    // mind: leaf / brain simplified
    <g key={3} {...p}><path d="M12 21c-5 0-8-3-8-8 0-6 5-9 16-9 0 11-3 17-8 17z" /><path d="M4 21c3-6 7-9 12-11" /></g>,
    // lab flask
    <g key={4} {...p}><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3" /><path d="M8 15h8" /></g>,
    // video
    <g key={5} {...p}><rect x="3" y="6" width="13" height="12" rx="3" /><path d="m16 10 5-3v10l-5-3z" /></g>,
  ];
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
      {icons[i % icons.length]}
    </svg>
  );
}

export function Services({ dict }: { dict: Dict }) {
  const s = dict.services;
  return (
    <section id="services" className="relative bg-white px-5 py-28 sm:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Head eyebrow={s.eyebrow} title={s.title} lead={s.lead} />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {s.items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 0.08} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-[2rem] border border-navy/10 bg-mist p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-transparent hover:bg-sage-light hover:shadow-[0_30px_60px_-35px] hover:shadow-navy/50">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-sage-deep shadow-sm transition-colors duration-500 group-hover:bg-navy group-hover:text-sage-light">
                  <ServiceIcon i={i} />
                </span>
                <h3 className="mt-8 text-2xl font-semibold">{it.title}</h3>
                <p className="mt-3 leading-relaxed text-navy/65">{it.text}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sage-deep transition-all group-hover:gap-3 group-hover:text-navy">
                  {s.link} <span>→</span>
                </span>
                <span className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-sage/30 blur-2xl transition-transform duration-700 group-hover:scale-150" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Doctors({ dict }: { dict: Dict }) {
  const d = dict.doctors;
  const tints = ["from-sage to-sage-light", "from-dawn to-sage-light", "from-sage-light to-sage", "from-sage to-dawn"];
  const shapes = [
    "rounded-[42%_58%_55%_45%/48%_42%_58%_52%]",
    "rounded-[58%_42%_40%_60%/55%_60%_40%_45%]",
    "rounded-[45%_55%_60%_40%/42%_55%_45%_58%]",
    "rounded-[55%_45%_48%_52%/60%_40%_60%_40%]",
  ];
  return (
    <section id="doctors" className="relative overflow-hidden bg-mist px-5 py-28 sm:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Head eyebrow={d.eyebrow} title={d.title} lead={d.lead} />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {d.people.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08} className="h-full">
              <article className="group flex h-full flex-col rounded-[2rem] bg-white p-6 shadow-[0_24px_50px_-38px] shadow-navy/50 transition-transform duration-500 hover:-translate-y-1.5">
                <div className={`relative grid aspect-square place-items-center overflow-hidden bg-gradient-to-br transition-all duration-700 group-hover:scale-[1.03] ${tints[i]} ${shapes[i]}`}>
                  <span className="font-display text-5xl font-semibold text-navy/80">{p.initials}</span>
                  <span className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-white/40 blur-xl" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{p.name}</h3>
                <p className="mt-1 text-sage-deep">{p.role}</p>
                <p className="mt-1 text-sm text-navy/50">{p.langs}</p>
                <div className="mt-auto flex items-center gap-2.5 pt-6 text-sm">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inset-0 animate-ping-soft rounded-full bg-sage-deep" />
                    <span className="relative h-2.5 w-2.5 rounded-full bg-sage-deep" />
                  </span>
                  <span className="text-navy/55">{d.next}:</span>
                  <span className="font-semibold">{p.slot}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Journey({ dict }: { dict: Dict }) {
  const j = dict.journey;
  return (
    <section id="journey" className="relative overflow-hidden bg-navy px-5 py-28 text-white sm:px-8 md:py-36">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-sage/25">
        <Ecg className="h-48 w-full" />
      </div>
      <div className="pointer-events-none absolute -left-32 top-0 h-[30rem] w-[30rem] animate-breathe rounded-full bg-sage-deep/25 blur-[100px]" />
      <div className="relative mx-auto max-w-7xl">
        <Head eyebrow={j.eyebrow} title={j.title} lead={j.lead} light />
        <ol className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {j.steps.map((s, i) => (
            <li key={s.n}>
              <Reveal delay={i * 0.12} className="h-full">
                <div className="relative h-full rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-sm transition-colors duration-500 hover:bg-white/[0.1]">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-sage-light font-display text-xl font-semibold text-navy">
                    {s.n}
                  </span>
                  <h3 className="mt-6 text-2xl font-semibold">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-white/65">{s.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Booking({ dict }: { dict: Dict }) {
  const b = dict.booking;
  return (
    <section id="book" className="hero-bg relative px-5 py-28 sm:px-8 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.15fr] lg:items-start">
        <div>
          <Head eyebrow={b.eyebrow} title={b.title} lead={b.lead} />
          <Reveal delay={0.2}>
            <p className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-medium shadow-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-sage-deep" />
              {b.hours}
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <div className="rounded-[2.25rem] border border-white bg-white/85 p-7 shadow-[0_50px_90px_-50px] shadow-navy/50 backdrop-blur-md sm:p-10">
            <BookingForm booking={b} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
