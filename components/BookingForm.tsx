"use client";

import { useState, type FormEvent } from "react";
import type { Dict } from "@/lib/i18n";

/** Static-site friendly booking widget: composes a mailto: request, nothing is stored or sent to a server. */
export default function BookingForm({ booking }: { booking: Dict["booking"] }) {
  const [type, setType] = useState(0);
  const [day, setDay] = useState(1);
  const [time, setTime] = useState(3);

  const summary = `${booking.types[type]} · ${booking.days[day]} · ${booking.times[time]}`;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Visit request — ${summary}`);
    const body = encodeURIComponent(`${summary}\n`);
    window.location.href = `mailto:${booking.email}?subject=${subject}&body=${body}`;
  };

  const chip = (active: boolean) =>
    `rounded-full border px-4 py-2 text-sm font-medium transition-all ${
      active ? "border-navy bg-navy text-white shadow-md" : "border-navy/15 bg-white text-navy/75 hover:border-navy/50"
    }`;

  return (
    <form onSubmit={onSubmit} className="space-y-7">
      <fieldset>
        <legend className="mb-3 text-sm font-semibold uppercase tracking-wider text-navy/50">{booking.type}</legend>
        <div className="flex flex-wrap gap-2">
          {booking.types.map((t, i) => (
            <button key={t} type="button" aria-pressed={type === i} onClick={() => setType(i)} className={chip(type === i)}>
              {t}
            </button>
          ))}
        </div>
      </fieldset>
      <fieldset>
        <legend className="mb-3 text-sm font-semibold uppercase tracking-wider text-navy/50">{booking.day}</legend>
        <div className="flex flex-wrap gap-2">
          {booking.days.map((d, i) => (
            <button key={d} type="button" aria-pressed={day === i} onClick={() => setDay(i)} className={chip(day === i)}>
              {d}
            </button>
          ))}
        </div>
      </fieldset>
      <fieldset>
        <legend className="mb-3 text-sm font-semibold uppercase tracking-wider text-navy/50">{booking.time}</legend>
        <div className="flex flex-wrap gap-2">
          {booking.times.map((t, i) => (
            <button key={t} type="button" aria-pressed={time === i} onClick={() => setTime(i)} className={chip(time === i)}>
              {t}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="flex flex-col gap-4 border-t border-navy/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-lg font-semibold" aria-live="polite">
          {summary}
        </p>
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-3 rounded-full bg-sage-deep px-7 py-4 text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-navy"
        >
          {booking.submit}
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </button>
      </div>
      <p className="text-sm text-navy/50">{booking.note}</p>
    </form>
  );
}
