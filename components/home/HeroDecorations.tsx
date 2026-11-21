
export default function HeroDecorations() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 -top-12 left-1/2 w-screen -translate-x-1/2 overflow-hidden lg:-top-16"
    >
      <svg
        className="hero-wave-drift absolute -bottom-5 right-0 h-[140px] w-[300px] max-w-[80vw]"
        viewBox="0 0 300 140"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 140C36 116 62 81 116 78C166 75 186 96 222 72C254 50 267 22 300 20V140H0Z"
          fill="#F9ECE9"
        />
      </svg>

      <div className="hero-float-reverse absolute -left-[4%] top-[5%] h-14 w-28 rounded-full bg-[#FCEBE5]/60" />

      <div className="hero-decoration-pulse absolute left-[2%] top-[5%] grid grid-cols-5 gap-[7px]">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="h-[3px] w-[3px] rounded-full bg-[#E53935]" />
        ))}
      </div>

      <div className="hero-float-slow absolute left-[6.5%] top-[31%] h-[7px] w-[7px] rounded-full bg-[#f0900b]" />
      <div className="hero-float-reverse absolute right-[19%] top-[17%] h-[7px] w-[7px] rounded-full bg-[#f0900b]" />
      <div className="hero-float-reverse absolute right-[8.5%] top-[28%] h-[7px] w-[7px] rounded-full bg-[#E84C42]" />
      <div className="hero-float-slow absolute left-[45%] top-[19%] h-[15px] w-[15px] rounded-full border border-[#f0900b]" />
      <div className="hero-float-reverse absolute right-[7%] top-[59%] h-[15px] w-[15px] rounded-full border-2 border-[#f0900b]" />
      <div className="hero-float-slow absolute left-[56%] bottom-[12%] h-[7px] w-[7px] rounded-full bg-[#f0900b]" />
      <div className="hero-float-reverse absolute right-[13%] bottom-[22%] h-[7px] w-[7px] rounded-full bg-[#f0900b]" />
      <div className="hero-float-slow absolute left-[6%] top-[66%] h-[7px] w-[7px] rounded-full bg-[#E84C42]" />
      <div className="hero-float-reverse absolute left-[4%] bottom-[15%] h-[15px] w-[15px] rounded-full border border-[#f0900b]" />

      <svg
        className="hero-float-slow absolute left-[4%] top-[45%]"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M5 3L21 12L5 21V3Z"
          stroke="#F0B49E"
          strokeWidth="1.5"
        />
      </svg>

      <svg
        className="hero-float-reverse absolute right-[9%] top-[34%]"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M5 3L21 12L5 21V3Z"
          stroke="#F0B49E"
          strokeWidth="1.5"
        />
      </svg>

      <svg
        className="decorative-wave-cross hero-curve-drift absolute -right-12 top-[4%] w-[290px] opacity-60"
        viewBox="0 0 320 120"
        fill="none"
      >
        <path
          d="M0 88C72 92 126 18 204 35C248 44 274 5 320 3"
          stroke="#F0BF91"
          strokeWidth="1.2"
        />
        <path
          d="M0 106C78 108 126 36 208 51C256 60 279 23 320 22"
          stroke="#F5D8C1"
          strokeWidth="1.2"
        />
      </svg>

      <svg
        className="decorative-wave-cross hero-curve-drift absolute -left-20 bottom-[3%] w-[300px] opacity-60"
        viewBox="0 0 320 130"
        fill="none"
      >
        <path
          d="M0 16C72 26 104 118 188 108C242 101 262 66 320 66"
          stroke="#F0BF91"
          strokeWidth="1.2"
        />
        <path
          d="M0 39C68 46 112 133 194 127C248 123 270 87 320 88"
          stroke="#F5D8C1"
          strokeWidth="1.2"
        />
      </svg>

      <div className="hero-decoration-pulse absolute bottom-[12%] right-[3%] grid grid-cols-5 gap-[7px]">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="h-[3px] w-[3px] rounded-full bg-[#E53935]" />
        ))}
      </div>
    </div>
  );
}
