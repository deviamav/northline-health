/** Decorative heartbeat line — drawn with a looping CSS stroke animation. */
export default function Ecg({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className={className} fill="none" aria-hidden="true">
      <path
        className="ecg-path animate-ecg"
        pathLength={1200}
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M0 60H180l10-8 12 8h98l10-44 16 88 12-58 8 14h126l14-12 16 12h226l10-44 16 88 12-58 8 14h126l14-12 16 12h130"
      />
    </svg>
  );
}
