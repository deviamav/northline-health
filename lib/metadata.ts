import type { Metadata } from "next";
import { getDict, type Locale } from "./i18n";

const ICON_SVG =
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='10' fill='#0f2a43'/><rect x='13' y='7' width='6' height='18' rx='3' fill='#cfdcd0'/><rect x='7' y='13' width='18' height='6' rx='3' fill='#cfdcd0'/></svg>";

export function getMetadata(locale: Locale): Metadata {
  const dict = getDict(locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    icons: { icon: `data:image/svg+xml,${encodeURIComponent(ICON_SVG)}` },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      type: "website",
      locale: locale === "en" ? "en_US" : "uk_UA",
    },
  };
}
