"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

// The 3D canvas is client-only; the rest of the page stays fully server-rendered / static.
const SceneCanvas = dynamic(() => import("./SceneCanvas"), { ssr: false });

function hasWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

export default function HeroScene() {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(true);
  const [still, setStill] = useState(false);

  useEffect(() => {
    setStill(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    setReady(hasWebGL());
  }, []);

  // Pause rendering when the hero is scrolled out of view.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="absolute inset-0" aria-hidden="true">
      {ready && <SceneCanvas active={visible} still={still} />}
    </div>
  );
}
