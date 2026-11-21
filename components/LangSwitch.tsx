import Link from "next/link";
import { localePath, locales, type Locale } from "@/lib/i18n";

export default function LangSwitch({
  locale,
  label,
  tone = "dark",
}: {
  locale: Locale;
  label: string;
  tone?: "dark" | "light";
}) {
  const wrap = tone === "dark" ? "bg-navy/5" : "bg-white/10";
  const on = tone === "dark" ? "bg-navy text-white" : "bg-white text-navy";
  const off = tone === "dark" ? "text-navy/60 hover:text-navy" : "text-white/70 hover:text-white";
  return (
    <div role="group" aria-label={label} className={`flex items-center rounded-full p-0.5 text-xs font-semibold ${wrap}`}>
      {locales.map((l) => {
        const active = l === locale;
        return (
          <Link
            key={l}
            href={localePath(l)}
            hrefLang={l}
            lang={l}
            aria-current={active ? "true" : undefined}
            className={`rounded-full px-3 py-1.5 uppercase transition-colors ${active ? on : off}`}
          >
            {l}
          </Link>
        );
      })}
    </div>
  );
}
