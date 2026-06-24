type ScribbleUnderlineProps = {
  className?: string;
};

/** Hand-drawn arc underline for a single word accent. */
export function ScribbleUnderline({ className = "" }: ScribbleUnderlineProps) {
  return (
    <svg
      viewBox="0 0 72 20"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none absolute -bottom-1 left-1/2 h-3 w-full -translate-x-1/2 text-charcoal/75 ${className}`.trim()}
    >
      <path
        d="M2 16 Q 36 2 70 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
