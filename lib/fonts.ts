import { Onest, Source_Sans_3 } from "next/font/google";

/** Friendly, precise grotesque for headings (full Cyrillic support). */
export const onest = Onest({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-onest",
  display: "swap",
});

export const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-source-sans",
  display: "swap",
});
