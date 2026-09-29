export default function Logo({ size = 30 }) {
  return (
    <span className="logo" aria-label="BOB">
      <svg
        className="logo-mark"
        width={size}
        height={size}
        viewBox="0 0 32 32"
        role="img"
        aria-hidden="true"
      >
        <rect width="32" height="32" rx="9" fill="var(--bg-sunken)" />
        <path
          d="M8 8h8a5 5 0 0 1 0 10H8z"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2.6"
        />
        <path
          d="M8 14h9a5 5 0 0 1 0 10H8z"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2.6"
        />
      </svg>
      <span className="logo-text">BOB</span>
    </span>
  );
}
