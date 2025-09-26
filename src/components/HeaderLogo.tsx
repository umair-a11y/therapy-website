import Link from "next/link";

interface HeaderLogoProps {
  className?: string;
}

export function HeaderLogo({ className = "" }: HeaderLogoProps) {
  return (
    <Link href="/" className={`flex items-center space-x-4 ${className}`}>
      <div className="relative w-16 h-16 flex-shrink-0">
        <svg viewBox="0 0 64 64" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Outer decorative ring with engravings */}
          <circle cx="32" cy="32" r="30" stroke="url(#outerRing)" strokeWidth="2" fill="url(#compassFilled)" />

          {/* Detailed compass markings - 32 points */}
          {Array.from({ length: 32 }, (_, i) => {
            const angle = (i * 360) / 32;
            const isCardinal = i % 8 === 0;
            const isMajor = i % 4 === 0;
            const length = isCardinal ? 6 : isMajor ? 4 : 2;
            const strokeWidth = isCardinal ? 2.5 : isMajor ? 2 : 1;
            const x1 = 32 + 26 * Math.cos(((angle - 90) * Math.PI) / 180);
            const y1 = 32 + 26 * Math.sin(((angle - 90) * Math.PI) / 180);
            const x2 = 32 + (26 - length) * Math.cos(((angle - 90) * Math.PI) / 180);
            const y2 = 32 + (26 - length) * Math.sin(((angle - 90) * Math.PI) / 180);

            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={isCardinal ? "#1f6f54" : "#4a5568"}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
              />
            );
          })}

          {/* Cardinal direction letters */}
          <text x="32" y="12" textAnchor="middle" className="fill-slate-800 font-bold text-xs" dominantBaseline="middle">
            N
          </text>
          <text x="52" y="36" textAnchor="middle" className="fill-slate-800 font-bold text-xs" dominantBaseline="middle">
            E
          </text>
          <text x="32" y="56" textAnchor="middle" className="fill-slate-800 font-bold text-xs" dominantBaseline="middle">
            S
          </text>
          <text x="12" y="36" textAnchor="middle" className="fill-slate-800 font-bold text-xs" dominantBaseline="middle">
            W
          </text>

          {/* Inner compass rose with detailed design */}
          <g>
            <g className="animate-pulse" style={{ animationDuration: "2s" }}>
              <path
                d="M32 12 L36 28 L32 26 L28 28 Z"
                fill="url(#northNeedleGlow)"
                stroke="#1a5f3f"
                strokeWidth="1.5"
                className="drop-shadow-lg animate-pulse"
                style={{ filter: "drop-shadow(0 0 4px #22c55e)" }}
              />
              <path
                d="M32 12 L36 28 L32 26 L28 28 Z"
                fill="url(#northNeedleCore)"
                stroke="#15803d"
                strokeWidth="1"
                className="animate-pulse"
                style={{ animationDuration: "1.5s" }}
              />
            </g>

            {/* South needle - grounding and stability - ALWAYS POINTS SOUTH */}
            <path d="M32 52 L28 36 L32 38 L36 36 Z" fill="url(#southNeedle)" stroke="#4a5568" strokeWidth="1" />

            {/* East and West needles for balance - FIXED DIRECTIONS */}
            <path d="M52 32 L36 28 L38 32 L36 36 Z" fill="url(#eastWestNeedle)" stroke="#6b7280" strokeWidth="0.8" />
            <path d="M12 32 L28 36 L26 32 L28 28 Z" fill="url(#eastWestNeedle)" stroke="#6b7280" strokeWidth="0.8" />
          </g>

          {/* Central guiding star - the heart of transformation */}
          <g transform="translate(32,32)" className="animate-pulse">
            <circle r="3" fill="url(#starGlow)" opacity="0.8" />
            <path
              d="M0,-6 L1.8,-1.8 L6,0 L1.8,1.8 L0,6 L-1.8,1.8 L-6,0 L-1.8,-1.8 Z"
              fill="url(#centerStar)"
              stroke="#1f6f54"
              strokeWidth="0.8"
              className="drop-shadow-md"
            />
            <circle r="1.5" fill="#d6a756" />
          </g>

          {/* Decorative corner elements representing strength and freedom */}
          <g opacity="0.6">
            <path d="M8 8 L12 8 L12 12" stroke="#4a5568" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M56 8 L52 8 L52 12" stroke="#4a5568" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M8 56 L12 56 L12 52" stroke="#4a5568" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M56 56 L52 56 L52 52" stroke="#4a5568" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          </g>

          {/* Gradient and effect definitions */}
          <defs>
            <radialGradient id="compassFilled" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f1f5f9" />
              <stop offset="40%" stopColor="#e2e8f0" />
              <stop offset="80%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#94a3b8" />
            </radialGradient>

            <linearGradient id="outerRing" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="50%" stopColor="#475569" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>

            <linearGradient id="northNeedle" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6faf97" />
              <stop offset="100%" stopColor="#1f6f54" />
            </linearGradient>

            <linearGradient id="southNeedle" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6faf97" />
              <stop offset="100%" stopColor="#1f6f54" />
            </linearGradient>

            <linearGradient id="eastWestNeedle" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6faf97" />
              <stop offset="100%" stopColor="#1f6f54" />
            </linearGradient>

            <radialGradient id="centerStar" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#d6a756" />
              <stop offset="100%" stopColor="#6faf97" />
            </radialGradient>

            <radialGradient id="starGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#6faf97" opacity="0.8" />
              <stop offset="100%" stopColor="#1f6f54" opacity="0.2" />
            </radialGradient>

            <linearGradient id="northNeedleGlow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6faf97" />
              <stop offset="100%" stopColor="#1f6f54" />
            </linearGradient>

            <linearGradient id="northNeedleCore" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6faf97" />
              <stop offset="100%" stopColor="#1f6f54" />
            </linearGradient>

            {/* Rotating ring gradient */}
            <linearGradient id="rotatingRing" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1f6f54" />
              <stop offset="100%" stopColor="#6faf97" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="flex flex-col space-y-1">
        <span className="font-black text-2xl leading-none text-slate-800 tracking-wider drop-shadow-sm">RESOLVE</span>
        <span className="text-sm text-slate-600 leading-none font-bold tracking-[0.2em] uppercase">MEN'S THERAPY</span>
        <div className="h-0.5 w-full therapeutic-gradient rounded-full" />
      </div>
    </Link>
  );
}
