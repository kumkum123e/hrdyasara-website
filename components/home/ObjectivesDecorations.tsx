
export default function ObjectivesDecorations() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Top right glow */}
      <div className="objectives-glow absolute -right-24 -top-32 h-[350px] w-[350px] rounded-full bg-[#F0900B]/[0.06] blur-[90px]" />

      {/* Bottom left glow */}
      <div className="objectives-glow absolute -bottom-32 -left-20 h-[320px] w-[320px] rounded-full bg-[#D23C4D]/[0.06] blur-[90px]" />

      {/* Top wave */}
      <svg
        className="absolute right-0 top-0 w-[400px] max-w-[60%]"
        viewBox="0 0 400 100"
        fill="none"
      >
        <path
          d="M0 0C130 110 260 -20 400 35"
          stroke="#F0900B"
          strokeWidth="1.5"
          opacity="0.55"
        />
        <path
          d="M0 0C150 85 275 -10 400 10"
          stroke="#D23C4D"
          strokeWidth="2"
          opacity="0.45"
        />
      </svg>

      {/* Bottom wave */}
      <svg
        className="absolute bottom-0 left-0 w-[500px] max-w-[70%]"
        viewBox="0 0 500 120"
        fill="none"
      >
        <path
          d="M0 80C150 0 300 140 500 70"
          stroke="#F0900B"
          strokeWidth="2"
          opacity="0.35"
        />
        <path
          d="M0 100C180 30 320 150 500 95"
          stroke="#D23C4D"
          strokeWidth="1.5"
          opacity="0.25"
        />
      </svg>
    </div>
  );
}
