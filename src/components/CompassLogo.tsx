import React from 'react';

interface CompassLogoProps {
  className?: string;
  size?: number;
}

export default function CompassLogo({ className = "", size = 40 }: CompassLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer circle */}
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke="#5A7D6C"
        strokeWidth="2"
        fill="#F8F7F4"
      />

      {/* Inner circle */}
      <circle
        cx="50"
        cy="50"
        r="35"
        stroke="#2A4033"
        strokeWidth="1"
        fill="none"
      />

      {/* Compass needle - North pointing */}
      <path
        d="M50 15 L40 50 L50 85 L60 50 Z"
        fill="#2A4033"
      />

      {/* Compass needle - South pointing */}
      <path
        d="M50 85 L40 50 L50 15 L60 50 Z"
        fill="#C5A57E"
        opacity="0.8"
      />

      {/* East-West indicator */}
      <path
        d="M15 50 L50 60 L85 50 L50 40 Z"
        fill="#A3B8A9"
        opacity="0.6"
      />

      {/* Center dot */}
      <circle
        cx="50"
        cy="50"
        r="4"
        fill="#2A4033"
      />

      {/* Cardinal direction markers */}
      <text x="50" y="12" fill="#2A4033" fontSize="10" fontWeight="bold" textAnchor="middle">N</text>
      <text x="50" y="95" fill="#5A7D6C" fontSize="10" fontWeight="bold" textAnchor="middle">S</text>
      <text x="8" y="53" fill="#5A7D6C" fontSize="10" fontWeight="bold" textAnchor="middle">W</text>
      <text x="92" y="53" fill="#5A7D6C" fontSize="10" fontWeight="bold" textAnchor="middle">E</text>
    </svg>
  );
}