import "../globals.css";
import type { ReactNode } from "react";
import Shell from "@/components/Shell";
import { getMetadata } from "@/lib/metadata";

export const metadata = getMetadata("en");

export default function Layout({ children }: { children: ReactNode }) {
  return <Shell locale="en">{children}</Shell>;
}
