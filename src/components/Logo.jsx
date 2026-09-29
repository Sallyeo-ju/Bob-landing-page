import bobLogo from '/bob-logo.png';

export default function Logo({ height = 44 }) {
  return (
    <span className="logo" aria-label="BOB">
      <img
        className="logo-mark"
        src={bobLogo}
        alt="BOB"
        height={height}
        style={{ height: `${height}px` }}
      />
    </span>
  );
}
