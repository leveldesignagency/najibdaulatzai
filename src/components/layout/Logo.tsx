export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Najib Daulatzai logo placeholder"
      role="img"
      className={className}
    >
      <rect
        x="1"
        y="1"
        width="46"
        height="46"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <text
        x="24"
        y="30"
        textAnchor="middle"
        fill="currentColor"
        fontSize="14"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
      >
        ND
      </text>
      <text
        x="62"
        y="30"
        fill="currentColor"
        fontSize="13"
        fontFamily="Arial, sans-serif"
        fontWeight="600"
        letterSpacing="0.18em"
      >
        NAJIB DAULATZAI
      </text>
    </svg>
  );
}
