"use client";

import { motion, type Variants } from "framer-motion";
import type { Dict } from "@/lib/i18n";
import HeroScene from "./HeroScene";

const ease: [number, number, number, number] = [0.25, 0.8, 0.25, 1];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

export default function Hero({ dict }: { dict: Dict }) {
  const h = dict.hero;
  return (
    <section className="hero-bg relative isolate min-h-[100svh] overflow-hidden">
      <div className="dots pointer-events-none absolute inset-0" />

      {/* soft breathing halo behind the 3D motif */}
      <div className="pointer-events-none absolute right-[-8%] top-1/2 hidden h-[44rem] w-[44rem] -translate-y-1/2 md:block">
        <div className="absolute inset-0 animate-breathe rounded-full border border-sage-deep/20" />
        <div className="absolute inset-[12%] animate-breathe-slow rounded-full border border-sage-deep/25" />
        <div className="absolute inset-[26%] animate-breathe rounded-full bg-sage-light/40" />
      </div>

      <HeroScene />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-10 pt-28 sm:px-8 md:justify-center md:pb-14">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-2xl">
          <motion.p
            variants={item}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-sage-deep/25 bg-white/70 px-4 py-2 text-sm font-medium text-sage-deep backdrop-blur"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inset-0 animate-ping-soft rounded-full bg-sage-deep" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-sage-deep" />
            </span>
            {h.eyebrow}
          </motion.p>
          <motion.h1 variants={item} className="text-[clamp(2.9rem,7vw,6rem)] font-semibold leading-[0.98]">
            {h.title}
            <br />
            <span className="text-sage-deep">{h.titleEmph}</span>
          </motion.h1>
          <motion.p variants={item} className="mt-7 max-w-xl text-lg leading-relaxed text-navy/70 sm:text-xl">
            {h.lead}
          </motion.p>
          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#book"
              className="group inline-flex items-center gap-3 rounded-full bg-navy px-7 py-4 text-base font-semibold text-white shadow-[0_18px_40px_-18px] shadow-navy transition-all hover:-translate-y-0.5 hover:bg-sage-deep"
            >
              {h.primary}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#services"
              className="rounded-full border border-navy/20 bg-white/60 px-7 py-4 text-base font-semibold backdrop-blur transition-colors hover:border-navy"
            >
              {h.secondary}
            </a>
          </motion.div>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.9, ease }}
          className="mt-14 grid max-w-2xl grid-cols-3 gap-4 rounded-3xl border border-white bg-white/70 p-5 shadow-[0_30px_60px_-40px] shadow-navy/40 backdrop-blur-md md:mt-16"
        >
          {h.trust.map((t) => (
            <div key={t.label}>
              <dt className="font-display text-2xl font-semibold sm:text-3xl">{t.value}</dt>
              <dd className="mt-1 text-xs leading-snug text-navy/60 sm:text-sm">{t.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <div className="absolute bottom-10 right-8 z-10 hidden animate-float-y items-center gap-3 rounded-2xl border border-white bg-white/80 px-5 py-4 shadow-[0_30px_60px_-30px] shadow-navy/40 backdrop-blur-md lg:flex">
        <span className="relative flex h-3 w-3">
          <span className="absolute inset-0 animate-ping-soft rounded-full bg-sage-deep" />
          <span className="relative h-3 w-3 rounded-full bg-sage-deep" />
        </span>
        <span className="text-sm font-semibold">{h.badge}</span>
      </div>
    </section>
  );
}
