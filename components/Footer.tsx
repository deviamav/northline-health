import type { Dict, Locale } from "@/lib/i18n";
import LangSwitch from "./LangSwitch";
import Logo from "./Logo";

export default function Footer({ locale, dict }: { locale: Locale; dict: Dict }) {
  const f = dict.footer;
  return (
    <footer className="bg-navy px-5 py-14 text-white sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <Logo light />
          <p className="mt-4 text-white/60">{f.tagline}</p>
        </div>
        <div className="flex flex-col gap-4 md:items-end">
          <LangSwitch locale={locale} label={f.language} tone="light" />
          <p className="max-w-lg text-xs leading-relaxed text-white/45 md:text-right">{f.demo}</p>
          <p className="text-xs text-white/45">{f.rights}</p>
        </div>
      </div>
    </footer>
  );
}
