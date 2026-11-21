export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
        <rect width="32" height="32" rx="10" fill={light ? "#dbe7dc" : "#0f2a43"} />
        <rect x="13" y="7" width="6" height="18" rx="3" fill={light ? "#0f2a43" : "#dbe7dc"} />
        <rect x="7" y="13" width="18" height="6" rx="3" fill={light ? "#0f2a43" : "#dbe7dc"} />
      </svg>
      <span className="font-display text-lg font-semibold tracking-tight">
        Northline <span className={light ? "text-sage" : "text-sage-deep"}>Health</span>
      </span>
    </span>
  );
}
